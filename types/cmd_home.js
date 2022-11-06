"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeChangeBgmReq_CmdId = exports.HomeNewUnlockedBgmIdListNotify_CmdId = exports.HomeAllUnlockedBgmIdListNotify_CmdId = exports.HomeMarkPointNotify_CmdId = exports.HomePriorCheckNotify_CmdId = exports.OtherPlayerEnterHomeNotify_CmdId = exports.OtherPlayerEnterHomeNotify_Reason = exports.PlayerQuitFromHomeNotify_CmdId = exports.PlayerQuitFromHomeNotify_QuitReason = exports.HomeComfortInfoNotify_CmdId = exports.FurnitureCurModuleArrangeCountNotify_CmdId = exports.GetFurnitureCurModuleArrangeCountReq_CmdId = exports.GetHomeLevelUpRewardRsp_CmdId = exports.GetHomeLevelUpRewardReq_CmdId = exports.UnlockedFurnitureSuiteDataNotify_CmdId = exports.UnlockedFurnitureFormulaDataNotify_CmdId = exports.HomeModuleSeenRsp_CmdId = exports.HomeModuleSeenReq_CmdId = exports.HomeKickPlayerRsp_CmdId = exports.HomeKickPlayerReq_CmdId = exports.HomeGetOnlineStatusRsp_CmdId = exports.HomeGetOnlineStatusReq_CmdId = exports.HomeModuleUnlockNotify_CmdId = exports.HomeChooseModuleRsp_CmdId = exports.HomeChooseModuleReq_CmdId = exports.HomeSceneJumpRsp_CmdId = exports.HomeSceneJumpReq_CmdId = exports.PlayerApplyEnterHomeResultNotify_CmdId = exports.PlayerApplyEnterHomeResultNotify_Reason = exports.PlayerApplyEnterHomeResultRsp_CmdId = exports.PlayerApplyEnterHomeResultReq_CmdId = exports.PlayerApplyEnterHomeNotify_CmdId = exports.SetFriendEnterHomeOptionRsp_CmdId = exports.SetFriendEnterHomeOptionReq_CmdId = exports.PlayerHomeCompInfoNotify_CmdId = exports.GetPlayerHomeCompInfoReq_CmdId = exports.HomeUpdateArrangementInfoRsp_CmdId = exports.HomeUpdateArrangementInfoReq_CmdId = exports.HomeGetArrangementInfoRsp_CmdId = exports.HomeGetArrangementInfoReq_CmdId = exports.HomeChangeModuleRsp_CmdId = exports.HomeChangeModuleReq_CmdId = exports.HomeChangeEditModeRsp_CmdId = exports.HomeChangeEditModeReq_CmdId = exports.HomeBasicInfoNotify_CmdId = exports.HomeGetBasicInfoReq_CmdId = exports.HomeBlockNotify_CmdId = exports.JoinHomeWorldFailNotify_CmdId = exports.TryEnterHomeRsp_CmdId = exports.TryEnterHomeReq_CmdId = void 0;
exports.HomePlantWeedReq_CmdId = exports.HomePlantSeedRsp_CmdId = exports.HomePlantSeedReq_CmdId = exports.HomeSceneInitFinishRsp_CmdId = exports.HomeSceneInitFinishReq_CmdId = exports.HomeAvatarAllFinishRewardNotify_CmdId = exports.HomeAvtarAllFinishRewardNotify_CmdId = exports.HomeAvatarSummonFinishRsp_CmdId = exports.HomeAvatarSummonFinishReq_CmdId = exports.HomeAvatarCostumeChangeNotify_CmdId = exports.HomeAvatarSummonEventRsp_CmdId = exports.HomeAvatarSummonEventReq_CmdId = exports.HomeAvatarSummonAllEventNotify_CmdId = exports.HomeAvatarRewardEventGetRsp_CmdId = exports.HomeAvatarRewardEventGetReq_CmdId = exports.HomeAvatarRewardEventNotify_CmdId = exports.HomeAvatarTalkRsp_CmdId = exports.HomeAvatarTalkReq_CmdId = exports.HomeAvatarTalkFinishInfoNotify_CmdId = exports.HomeResourceTakeFetterExpRsp_CmdId = exports.HomeResourceTakeFetterExpReq_CmdId = exports.HomeResourceTakeHomeCoinRsp_CmdId = exports.HomeResourceTakeHomeCoinReq_CmdId = exports.HomeResourceNotify_CmdId = exports.HomeLimitedShopInfoChangeNotify_CmdId = exports.HomeLimitedShopBuyGoodsRsp_CmdId = exports.HomeLimitedShopBuyGoodsReq_CmdId = exports.HomeLimitedShopGoodsListRsp_CmdId = exports.HomeLimitedShopGoodsListReq_CmdId = exports.HomeLimitedShopInfoNotify_CmdId = exports.HomeLimitedShopInfoRsp_CmdId = exports.HomeLimitedShopInfoReq_CmdId = exports.FunitureMakeMakeInfoChangeNotify_CmdId = exports.FurnitureMakeHelpRsp_CmdId = exports.FurnitureMakeHelpReq_CmdId = exports.FurnitureMakeBeHelpedNotify_CmdId = exports.FurnitureMakeCancelRsp_CmdId = exports.FurnitureMakeCancelReq_CmdId = exports.FurnitureMakeStartRsp_CmdId = exports.FurnitureMakeStartReq_CmdId = exports.FurnitureMakeFinishNotify_CmdId = exports.TakeFurnitureMakeRsp_CmdId = exports.TakeFurnitureMakeReq_CmdId = exports.FurnitureMakeRsp_CmdId = exports.FurnitureMakeReq_CmdId = exports.HomeEnterEditModeFinishRsp_CmdId = exports.HomeEnterEditModeFinishReq_CmdId = exports.HomePreChangeEditModeNotify_CmdId = exports.HomeChangeBgmNotify_CmdId = exports.HomeChangeBgmRsp_CmdId = void 0;
exports.HomeSaveArrangementNoChangeRsp_CmdId = exports.HomeSaveArrangementNoChangeReq_CmdId = exports.HomeSearchBlueprintRsp_CmdId = exports.HomeSearchBlueprintReq_CmdId = exports.HomeDeleteBlueprintRsp_CmdId = exports.HomeDeleteBlueprintReq_CmdId = exports.HomeCreateBlueprintRsp_CmdId = exports.HomeCreateBlueprintReq_CmdId = exports.HomePreviewBlueprintRsp_CmdId = exports.HomePreviewBlueprintReq_CmdId = exports.HomeBlueprintInfoNotify_CmdId = exports.HomeSetBlueprintFriendOptionRsp_CmdId = exports.HomeSetBlueprintFriendOptionReq_CmdId = exports.HomeSetBlueprintSlotOptionRsp_CmdId = exports.HomeSetBlueprintSlotOptionReq_CmdId = exports.HomeGetBlueprintSlotInfoRsp_CmdId = exports.HomeGetBlueprintSlotInfoReq_CmdId = exports.HomeExchangeWoodRsp_CmdId = exports.HomeExchangeWoodReq_CmdId = exports.GetHomeExchangeWoodInfoRsp_CmdId = exports.GetHomeExchangeWoodInfoReq_CmdId = exports.HomeSeekFurnitureGalleryScoreNotify_CmdId = exports.HomeBalloonGalleryScoreNotify_CmdId = exports.HomeBalloonGallerySettleNotify_CmdId = exports.HomeClearGroupRecordRsp_CmdId = exports.HomeClearGroupRecordReq_CmdId = exports.HomeGetGroupRecordRsp_CmdId = exports.HomeGetGroupRecordReq_CmdId = exports.HomeRacingGallerySettleNotify_CmdId = exports.HomeUpdatePictureFrameInfoRsp_CmdId = exports.HomeUpdatePictureFrameInfoReq_CmdId = exports.HomePictureFrameInfoNotify_CmdId = exports.HomeEditCustomFurnitureRsp_CmdId = exports.HomeEditCustomFurnitureReq_CmdId = exports.HomeCustomFurnitureInfoNotify_CmdId = exports.HomeScenePointFishFarmingInfoNotify_CmdId = exports.HomeUpdateScenePointFishFarmingInfoRsp_CmdId = exports.HomeUpdateScenePointFishFarmingInfoReq_CmdId = exports.HomeUpdateFishFarmingInfoRsp_CmdId = exports.HomeUpdateFishFarmingInfoReq_CmdId = exports.HomeFishFarmingInfoNotify_CmdId = exports.HomeGetFishFarmingInfoRsp_CmdId = exports.HomeGetFishFarmingInfoReq_CmdId = exports.HomeTransferRsp_CmdId = exports.HomeTransferReq_CmdId = exports.HomePlantInfoRsp_CmdId = exports.HomePlantInfoReq_CmdId = exports.HomePlantFieldNotify_CmdId = exports.HomePlantInfoNotify_CmdId = exports.HomePlantWeedRsp_CmdId = void 0;
exports.HomeKickPlayerReq = exports.HomeGetOnlineStatusRsp = exports.HomeGetOnlineStatusReq = exports.HomeModuleUnlockNotify = exports.HomeChooseModuleRsp = exports.HomeChooseModuleReq = exports.HomeSceneJumpRsp = exports.HomeSceneJumpReq = exports.PlayerApplyEnterHomeResultNotify = exports.PlayerApplyEnterHomeResultRsp = exports.PlayerApplyEnterHomeResultReq = exports.PlayerApplyEnterHomeNotify = exports.SetFriendEnterHomeOptionRsp = exports.SetFriendEnterHomeOptionReq = exports.PlayerHomeCompInfoNotify = exports.GetPlayerHomeCompInfoReq = exports.PlayerHomeCompInfo = exports.HomeUpdateArrangementInfoRsp = exports.HomeUpdateArrangementInfoReq = exports.HomeGetArrangementInfoRsp = exports.HomeGetArrangementInfoReq = exports.HomeSceneArrangementInfo = exports.HomeBlockArrangementInfo = exports.HomeFurnitureCustomSuiteData = exports.HomeFurnitureGroupData = exports.HomeTransferData = exports.HomeBlockFieldData = exports.HomeBlockSubFieldData = exports.HomeBlockDotPattern = exports.WeekendDjinnInfo = exports.HomeAnimalData = exports.HomeNpcData = exports.HomeFurnitureSuiteData = exports.HomeFurnitureData = exports.HomeChangeModuleRsp = exports.HomeChangeModuleReq = exports.HomeChangeEditModeRsp = exports.HomeChangeEditModeReq = exports.HomeBasicInfoNotify = exports.HomeGetBasicInfoReq = exports.HomeBasicInfo = exports.HomeBlockNotify = exports.JoinHomeWorldFailNotify = exports.TryEnterHomeRsp = exports.TryEnterHomeReq = exports.HomeVerifyData = exports.HomeVerifySceneData = exports.HomeVerifyBlockData = exports.HomeVerifyFurnitureData = exports.HomePlantFieldStatus = void 0;
exports.HomeLimitedShopGoodsListRsp = exports.HomeLimitedShopGoodsListReq = exports.HomeLimitedShop = exports.HomeLimitedShopGoods = exports.HomeLimitedShopInfoNotify = exports.HomeLimitedShopInfoRsp = exports.HomeLimitedShopInfoReq = exports.HomeLimitedShopInfo = exports.FunitureMakeMakeInfoChangeNotify = exports.FurnitureMakeHelpRsp = exports.FurnitureMakeHelpReq = exports.FurnitureMakeBeHelpedNotify = exports.FurnitureMakeCancelRsp = exports.FurnitureMakeCancelReq = exports.FurnitureMakeStartRsp = exports.FurnitureMakeStartReq = exports.FurnitureMakeFinishNotify = exports.TakeFurnitureMakeRsp = exports.TakeFurnitureMakeReq = exports.FurnitureMakeRsp = exports.FurnitureMakeReq = exports.FurnitureMakeMakeInfo = exports.FurnitureMakeHelpData = exports.FurnitureMakeBeHelpedData = exports.FurnitureMakeSlot = exports.FurnitureMakeData = exports.HomeEnterEditModeFinishRsp = exports.HomeEnterEditModeFinishReq = exports.HomePreChangeEditModeNotify = exports.HomeChangeBgmNotify = exports.HomeChangeBgmRsp = exports.HomeChangeBgmReq = exports.HomeNewUnlockedBgmIdListNotify = exports.HomeAllUnlockedBgmIdListNotify = exports.HomeMarkPointNotify = exports.HomeMarkPointSceneData = exports.HomePriorCheckNotify = exports.OtherPlayerEnterHomeNotify = exports.PlayerQuitFromHomeNotify = exports.HomeComfortInfoNotify = exports.HomeModuleComfortInfo = exports.FurnitureCurModuleArrangeCountNotify = exports.GetFurnitureCurModuleArrangeCountReq = exports.GetHomeLevelUpRewardRsp = exports.GetHomeLevelUpRewardReq = exports.UnlockedFurnitureSuiteDataNotify = exports.UnlockedFurnitureFormulaDataNotify = exports.HomeModuleSeenRsp = exports.HomeModuleSeenReq = exports.HomeKickPlayerRsp = void 0;
exports.HomeScenePointFishFarmingInfoNotify = exports.HomeUpdateScenePointFishFarmingInfoRsp = exports.HomeUpdateScenePointFishFarmingInfoReq = exports.HomeScenePointFishFarmingInfo = exports.HomeUpdateFishFarmingInfoRsp = exports.HomeUpdateFishFarmingInfoReq = exports.HomeFishFarmingInfoNotify = exports.HomeGetFishFarmingInfoRsp = exports.HomeGetFishFarmingInfoReq = exports.HomeFishFarmingInfo = exports.HomeTransferRsp = exports.HomeTransferReq = exports.HomePlantInfoRsp = exports.HomePlantInfoReq = exports.HomePlantFieldNotify = exports.HomePlantInfoNotify = exports.HomePlantFieldData = exports.HomePlantSubFieldData = exports.HomePlantWeedRsp = exports.HomePlantWeedReq = exports.HomePlantSeedRsp = exports.HomePlantSeedReq = exports.HomeSceneInitFinishRsp = exports.HomeSceneInitFinishReq = exports.HomeAvatarAllFinishRewardNotify = exports.HomeAvtarAllFinishRewardNotify = exports.HomeAvatarSummonFinishRsp = exports.HomeAvatarSummonFinishReq = exports.HomeAvatarCostumeChangeNotify = exports.HomeAvatarSummonEventRsp = exports.HomeAvatarSummonEventReq = exports.HomeAvatarSummonAllEventNotify = exports.HomeAvatarSummonEventInfo = exports.HomeAvatarRewardEventGetRsp = exports.HomeAvatarRewardEventGetReq = exports.HomeAvatarRewardEventNotify = exports.HomeAvatarRewardEventInfo = exports.HomeAvatarTalkRsp = exports.HomeAvatarTalkReq = exports.HomeAvatarTalkFinishInfoNotify = exports.HomeAvatarTalkFinishInfo = exports.HomeResourceTakeFetterExpRsp = exports.HomeResourceTakeFetterExpReq = exports.HomeResourceTakeHomeCoinRsp = exports.HomeResourceTakeHomeCoinReq = exports.HomeResourceNotify = exports.HomeResource = exports.HomeLimitedShopInfoChangeNotify = exports.HomeLimitedShopBuyGoodsRsp = exports.HomeLimitedShopBuyGoodsReq = void 0;
exports.HomeSaveArrangementNoChangeReq = exports.HomeSearchBlueprintRsp = exports.HomeSearchBlueprintReq = exports.HomeBlueprintSearchInfo = exports.HomeDeleteBlueprintRsp = exports.HomeDeleteBlueprintReq = exports.HomeCreateBlueprintRsp = exports.HomeCreateBlueprintReq = exports.HomePreviewBlueprintRsp = exports.HomePreviewBlueprintReq = exports.HomeBlueprintInfoNotify = exports.HomeSetBlueprintFriendOptionRsp = exports.HomeSetBlueprintFriendOptionReq = exports.HomeSetBlueprintSlotOptionRsp = exports.HomeSetBlueprintSlotOptionReq = exports.HomeGetBlueprintSlotInfoRsp = exports.HomeGetBlueprintSlotInfoReq = exports.HomeBlueprintSlotInfo = exports.HomeExchangeWoodRsp = exports.HomeExchangeWoodReq = exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo = exports.GetHomeExchangeWoodInfoRsp = exports.GetHomeExchangeWoodInfoReq = exports.HomeSeekFurnitureGalleryScoreNotify = exports.HomeBalloonGalleryScoreNotify = exports.HomeBalloonGallerySettleNotify = exports.HomeClearGroupRecordRsp = exports.HomeClearGroupRecordReq = exports.HomeGetGroupRecordRsp = exports.HomeGetGroupRecordReq = exports.HomeGroupRecord = exports.HomeSeekFurnitureAllRecord = exports.HomeSeekFurnitureOneRecord = exports.HomeSeekFurniturePlayerScore = exports.HomeStakeRecord = exports.HomeStakePlayRecord = exports.HomeBalloonRecord = exports.HomeBalloonGalleryRecord = exports.HomeRacingRecord = exports.HomeRacingGalleryRecord = exports.HomeGroupPlayerInfo = exports.HomeRacingGallerySettleNotify = exports.HomeUpdatePictureFrameInfoRsp = exports.HomeUpdatePictureFrameInfoReq = exports.HomePictureFrameInfoNotify = exports.HomePictureFrameInfo = exports.HomeEditCustomFurnitureRsp = exports.HomeEditCustomFurnitureReq = exports.HomeCustomFurnitureInfoNotify = exports.HomeCustomFurnitureInfo = void 0;
exports.HomeSaveArrangementNoChangeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const cmd_gallery_1 = require("./cmd_gallery");
const cmd_gallery_2 = require("./cmd_gallery");
const cmd_gallery_3 = require("./cmd_gallery");
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
/**
 * @generated from protobuf enum com.midnights.game.TryEnterHomeReq.CmdId
 */
var TryEnterHomeReq_CmdId;
(function (TryEnterHomeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryEnterHomeReq_CmdId[TryEnterHomeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4482;
     */
    TryEnterHomeReq_CmdId[TryEnterHomeReq_CmdId["CMD_ID"] = 4482] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryEnterHomeReq_CmdId[TryEnterHomeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryEnterHomeReq_CmdId[TryEnterHomeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryEnterHomeReq_CmdId[TryEnterHomeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TryEnterHomeReq_CmdId = exports.TryEnterHomeReq_CmdId || (exports.TryEnterHomeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TryEnterHomeRsp.CmdId
 */
var TryEnterHomeRsp_CmdId;
(function (TryEnterHomeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryEnterHomeRsp_CmdId[TryEnterHomeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4653;
     */
    TryEnterHomeRsp_CmdId[TryEnterHomeRsp_CmdId["CMD_ID"] = 4653] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryEnterHomeRsp_CmdId[TryEnterHomeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryEnterHomeRsp_CmdId[TryEnterHomeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TryEnterHomeRsp_CmdId = exports.TryEnterHomeRsp_CmdId || (exports.TryEnterHomeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.JoinHomeWorldFailNotify.CmdId
 */
var JoinHomeWorldFailNotify_CmdId;
(function (JoinHomeWorldFailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinHomeWorldFailNotify_CmdId[JoinHomeWorldFailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4530;
     */
    JoinHomeWorldFailNotify_CmdId[JoinHomeWorldFailNotify_CmdId["CMD_ID"] = 4530] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinHomeWorldFailNotify_CmdId[JoinHomeWorldFailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    JoinHomeWorldFailNotify_CmdId[JoinHomeWorldFailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(JoinHomeWorldFailNotify_CmdId = exports.JoinHomeWorldFailNotify_CmdId || (exports.JoinHomeWorldFailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeBlockNotify.CmdId
 */
var HomeBlockNotify_CmdId;
(function (HomeBlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBlockNotify_CmdId[HomeBlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4543;
     */
    HomeBlockNotify_CmdId[HomeBlockNotify_CmdId["CMD_ID"] = 4543] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBlockNotify_CmdId[HomeBlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeBlockNotify_CmdId[HomeBlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeBlockNotify_CmdId = exports.HomeBlockNotify_CmdId || (exports.HomeBlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetBasicInfoReq.CmdId
 */
var HomeGetBasicInfoReq_CmdId;
(function (HomeGetBasicInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBasicInfoReq_CmdId[HomeGetBasicInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4655;
     */
    HomeGetBasicInfoReq_CmdId[HomeGetBasicInfoReq_CmdId["CMD_ID"] = 4655] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBasicInfoReq_CmdId[HomeGetBasicInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetBasicInfoReq_CmdId[HomeGetBasicInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetBasicInfoReq_CmdId[HomeGetBasicInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetBasicInfoReq_CmdId = exports.HomeGetBasicInfoReq_CmdId || (exports.HomeGetBasicInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeBasicInfoNotify.CmdId
 */
var HomeBasicInfoNotify_CmdId;
(function (HomeBasicInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBasicInfoNotify_CmdId[HomeBasicInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4885;
     */
    HomeBasicInfoNotify_CmdId[HomeBasicInfoNotify_CmdId["CMD_ID"] = 4885] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBasicInfoNotify_CmdId[HomeBasicInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeBasicInfoNotify_CmdId[HomeBasicInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeBasicInfoNotify_CmdId = exports.HomeBasicInfoNotify_CmdId || (exports.HomeBasicInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeEditModeReq.CmdId
 */
var HomeChangeEditModeReq_CmdId;
(function (HomeChangeEditModeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeEditModeReq_CmdId[HomeChangeEditModeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4564;
     */
    HomeChangeEditModeReq_CmdId[HomeChangeEditModeReq_CmdId["CMD_ID"] = 4564] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeEditModeReq_CmdId[HomeChangeEditModeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeEditModeReq_CmdId[HomeChangeEditModeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeEditModeReq_CmdId[HomeChangeEditModeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeChangeEditModeReq_CmdId = exports.HomeChangeEditModeReq_CmdId || (exports.HomeChangeEditModeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeEditModeRsp.CmdId
 */
var HomeChangeEditModeRsp_CmdId;
(function (HomeChangeEditModeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeEditModeRsp_CmdId[HomeChangeEditModeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4559;
     */
    HomeChangeEditModeRsp_CmdId[HomeChangeEditModeRsp_CmdId["CMD_ID"] = 4559] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeEditModeRsp_CmdId[HomeChangeEditModeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeEditModeRsp_CmdId[HomeChangeEditModeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeChangeEditModeRsp_CmdId = exports.HomeChangeEditModeRsp_CmdId || (exports.HomeChangeEditModeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeModuleReq.CmdId
 */
var HomeChangeModuleReq_CmdId;
(function (HomeChangeModuleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeModuleReq_CmdId[HomeChangeModuleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4809;
     */
    HomeChangeModuleReq_CmdId[HomeChangeModuleReq_CmdId["CMD_ID"] = 4809] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeModuleReq_CmdId[HomeChangeModuleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeModuleReq_CmdId[HomeChangeModuleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeModuleReq_CmdId[HomeChangeModuleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeChangeModuleReq_CmdId = exports.HomeChangeModuleReq_CmdId || (exports.HomeChangeModuleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeModuleRsp.CmdId
 */
var HomeChangeModuleRsp_CmdId;
(function (HomeChangeModuleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeModuleRsp_CmdId[HomeChangeModuleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4596;
     */
    HomeChangeModuleRsp_CmdId[HomeChangeModuleRsp_CmdId["CMD_ID"] = 4596] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeModuleRsp_CmdId[HomeChangeModuleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeModuleRsp_CmdId[HomeChangeModuleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeChangeModuleRsp_CmdId = exports.HomeChangeModuleRsp_CmdId || (exports.HomeChangeModuleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetArrangementInfoReq.CmdId
 */
var HomeGetArrangementInfoReq_CmdId;
(function (HomeGetArrangementInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetArrangementInfoReq_CmdId[HomeGetArrangementInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4848;
     */
    HomeGetArrangementInfoReq_CmdId[HomeGetArrangementInfoReq_CmdId["CMD_ID"] = 4848] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetArrangementInfoReq_CmdId[HomeGetArrangementInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetArrangementInfoReq_CmdId[HomeGetArrangementInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetArrangementInfoReq_CmdId[HomeGetArrangementInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetArrangementInfoReq_CmdId = exports.HomeGetArrangementInfoReq_CmdId || (exports.HomeGetArrangementInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetArrangementInfoRsp.CmdId
 */
var HomeGetArrangementInfoRsp_CmdId;
(function (HomeGetArrangementInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetArrangementInfoRsp_CmdId[HomeGetArrangementInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4844;
     */
    HomeGetArrangementInfoRsp_CmdId[HomeGetArrangementInfoRsp_CmdId["CMD_ID"] = 4844] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetArrangementInfoRsp_CmdId[HomeGetArrangementInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetArrangementInfoRsp_CmdId[HomeGetArrangementInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGetArrangementInfoRsp_CmdId = exports.HomeGetArrangementInfoRsp_CmdId || (exports.HomeGetArrangementInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateArrangementInfoReq.CmdId
 */
var HomeUpdateArrangementInfoReq_CmdId;
(function (HomeUpdateArrangementInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateArrangementInfoReq_CmdId[HomeUpdateArrangementInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4510;
     */
    HomeUpdateArrangementInfoReq_CmdId[HomeUpdateArrangementInfoReq_CmdId["CMD_ID"] = 4510] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateArrangementInfoReq_CmdId[HomeUpdateArrangementInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateArrangementInfoReq_CmdId[HomeUpdateArrangementInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateArrangementInfoReq_CmdId[HomeUpdateArrangementInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeUpdateArrangementInfoReq_CmdId = exports.HomeUpdateArrangementInfoReq_CmdId || (exports.HomeUpdateArrangementInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateArrangementInfoRsp.CmdId
 */
var HomeUpdateArrangementInfoRsp_CmdId;
(function (HomeUpdateArrangementInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateArrangementInfoRsp_CmdId[HomeUpdateArrangementInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4757;
     */
    HomeUpdateArrangementInfoRsp_CmdId[HomeUpdateArrangementInfoRsp_CmdId["CMD_ID"] = 4757] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateArrangementInfoRsp_CmdId[HomeUpdateArrangementInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateArrangementInfoRsp_CmdId[HomeUpdateArrangementInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeUpdateArrangementInfoRsp_CmdId = exports.HomeUpdateArrangementInfoRsp_CmdId || (exports.HomeUpdateArrangementInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerHomeCompInfoReq.CmdId
 */
var GetPlayerHomeCompInfoReq_CmdId;
(function (GetPlayerHomeCompInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerHomeCompInfoReq_CmdId[GetPlayerHomeCompInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4597;
     */
    GetPlayerHomeCompInfoReq_CmdId[GetPlayerHomeCompInfoReq_CmdId["CMD_ID"] = 4597] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerHomeCompInfoReq_CmdId[GetPlayerHomeCompInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerHomeCompInfoReq_CmdId[GetPlayerHomeCompInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerHomeCompInfoReq_CmdId[GetPlayerHomeCompInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerHomeCompInfoReq_CmdId = exports.GetPlayerHomeCompInfoReq_CmdId || (exports.GetPlayerHomeCompInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerHomeCompInfoNotify.CmdId
 */
var PlayerHomeCompInfoNotify_CmdId;
(function (PlayerHomeCompInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerHomeCompInfoNotify_CmdId[PlayerHomeCompInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4880;
     */
    PlayerHomeCompInfoNotify_CmdId[PlayerHomeCompInfoNotify_CmdId["CMD_ID"] = 4880] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerHomeCompInfoNotify_CmdId[PlayerHomeCompInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerHomeCompInfoNotify_CmdId[PlayerHomeCompInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerHomeCompInfoNotify_CmdId = exports.PlayerHomeCompInfoNotify_CmdId || (exports.PlayerHomeCompInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetFriendEnterHomeOptionReq.CmdId
 */
var SetFriendEnterHomeOptionReq_CmdId;
(function (SetFriendEnterHomeOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendEnterHomeOptionReq_CmdId[SetFriendEnterHomeOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4494;
     */
    SetFriendEnterHomeOptionReq_CmdId[SetFriendEnterHomeOptionReq_CmdId["CMD_ID"] = 4494] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendEnterHomeOptionReq_CmdId[SetFriendEnterHomeOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendEnterHomeOptionReq_CmdId[SetFriendEnterHomeOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendEnterHomeOptionReq_CmdId[SetFriendEnterHomeOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetFriendEnterHomeOptionReq_CmdId = exports.SetFriendEnterHomeOptionReq_CmdId || (exports.SetFriendEnterHomeOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetFriendEnterHomeOptionRsp.CmdId
 */
var SetFriendEnterHomeOptionRsp_CmdId;
(function (SetFriendEnterHomeOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendEnterHomeOptionRsp_CmdId[SetFriendEnterHomeOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4743;
     */
    SetFriendEnterHomeOptionRsp_CmdId[SetFriendEnterHomeOptionRsp_CmdId["CMD_ID"] = 4743] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendEnterHomeOptionRsp_CmdId[SetFriendEnterHomeOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendEnterHomeOptionRsp_CmdId[SetFriendEnterHomeOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetFriendEnterHomeOptionRsp_CmdId = exports.SetFriendEnterHomeOptionRsp_CmdId || (exports.SetFriendEnterHomeOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterHomeNotify.CmdId
 */
var PlayerApplyEnterHomeNotify_CmdId;
(function (PlayerApplyEnterHomeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeNotify_CmdId[PlayerApplyEnterHomeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4533;
     */
    PlayerApplyEnterHomeNotify_CmdId[PlayerApplyEnterHomeNotify_CmdId["CMD_ID"] = 4533] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeNotify_CmdId[PlayerApplyEnterHomeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterHomeNotify_CmdId[PlayerApplyEnterHomeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterHomeNotify_CmdId = exports.PlayerApplyEnterHomeNotify_CmdId || (exports.PlayerApplyEnterHomeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterHomeResultReq.CmdId
 */
var PlayerApplyEnterHomeResultReq_CmdId;
(function (PlayerApplyEnterHomeResultReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultReq_CmdId[PlayerApplyEnterHomeResultReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4693;
     */
    PlayerApplyEnterHomeResultReq_CmdId[PlayerApplyEnterHomeResultReq_CmdId["CMD_ID"] = 4693] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultReq_CmdId[PlayerApplyEnterHomeResultReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterHomeResultReq_CmdId[PlayerApplyEnterHomeResultReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterHomeResultReq_CmdId[PlayerApplyEnterHomeResultReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerApplyEnterHomeResultReq_CmdId = exports.PlayerApplyEnterHomeResultReq_CmdId || (exports.PlayerApplyEnterHomeResultReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterHomeResultRsp.CmdId
 */
var PlayerApplyEnterHomeResultRsp_CmdId;
(function (PlayerApplyEnterHomeResultRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultRsp_CmdId[PlayerApplyEnterHomeResultRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4706;
     */
    PlayerApplyEnterHomeResultRsp_CmdId[PlayerApplyEnterHomeResultRsp_CmdId["CMD_ID"] = 4706] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultRsp_CmdId[PlayerApplyEnterHomeResultRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterHomeResultRsp_CmdId[PlayerApplyEnterHomeResultRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterHomeResultRsp_CmdId = exports.PlayerApplyEnterHomeResultRsp_CmdId || (exports.PlayerApplyEnterHomeResultRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterHomeResultNotify.Reason
 */
var PlayerApplyEnterHomeResultNotify_Reason;
(function (PlayerApplyEnterHomeResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: PLAYER_JUDGE = 0;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_JUDGE"] = 0] = "PLAYER_JUDGE";
    /**
     * @generated from protobuf enum value: PLAYER_ENTER_OPTION_REFUSE = 1;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_ENTER_OPTION_REFUSE"] = 1] = "PLAYER_ENTER_OPTION_REFUSE";
    /**
     * @generated from protobuf enum value: PLAYER_ENTER_OPTION_DIRECT = 2;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PLAYER_ENTER_OPTION_DIRECT"] = 2] = "PLAYER_ENTER_OPTION_DIRECT";
    /**
     * @generated from protobuf enum value: SYSTEM_JUDGE = 3;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["SYSTEM_JUDGE"] = 3] = "SYSTEM_JUDGE";
    /**
     * @generated from protobuf enum value: HOST_IN_MATCH = 4;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["HOST_IN_MATCH"] = 4] = "HOST_IN_MATCH";
    /**
     * @generated from protobuf enum value: PS_PLAYER_NOT_ACCEPT_OTHERS = 5;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PS_PLAYER_NOT_ACCEPT_OTHERS"] = 5] = "PS_PLAYER_NOT_ACCEPT_OTHERS";
    /**
     * @generated from protobuf enum value: OPEN_STATE_NOT_OPEN = 6;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["OPEN_STATE_NOT_OPEN"] = 6] = "OPEN_STATE_NOT_OPEN";
    /**
     * @generated from protobuf enum value: HOST_IN_EDIT_MODE = 7;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["HOST_IN_EDIT_MODE"] = 7] = "HOST_IN_EDIT_MODE";
    /**
     * @generated from protobuf enum value: PRIOR_CHECK = 8;
     */
    PlayerApplyEnterHomeResultNotify_Reason[PlayerApplyEnterHomeResultNotify_Reason["PRIOR_CHECK"] = 8] = "PRIOR_CHECK";
})(PlayerApplyEnterHomeResultNotify_Reason = exports.PlayerApplyEnterHomeResultNotify_Reason || (exports.PlayerApplyEnterHomeResultNotify_Reason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterHomeResultNotify.CmdId
 */
var PlayerApplyEnterHomeResultNotify_CmdId;
(function (PlayerApplyEnterHomeResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultNotify_CmdId[PlayerApplyEnterHomeResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4468;
     */
    PlayerApplyEnterHomeResultNotify_CmdId[PlayerApplyEnterHomeResultNotify_CmdId["CMD_ID"] = 4468] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterHomeResultNotify_CmdId[PlayerApplyEnterHomeResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterHomeResultNotify_CmdId[PlayerApplyEnterHomeResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterHomeResultNotify_CmdId = exports.PlayerApplyEnterHomeResultNotify_CmdId || (exports.PlayerApplyEnterHomeResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSceneJumpReq.CmdId
 */
var HomeSceneJumpReq_CmdId;
(function (HomeSceneJumpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneJumpReq_CmdId[HomeSceneJumpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4528;
     */
    HomeSceneJumpReq_CmdId[HomeSceneJumpReq_CmdId["CMD_ID"] = 4528] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneJumpReq_CmdId[HomeSceneJumpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneJumpReq_CmdId[HomeSceneJumpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneJumpReq_CmdId[HomeSceneJumpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSceneJumpReq_CmdId = exports.HomeSceneJumpReq_CmdId || (exports.HomeSceneJumpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSceneJumpRsp.CmdId
 */
var HomeSceneJumpRsp_CmdId;
(function (HomeSceneJumpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneJumpRsp_CmdId[HomeSceneJumpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4698;
     */
    HomeSceneJumpRsp_CmdId[HomeSceneJumpRsp_CmdId["CMD_ID"] = 4698] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneJumpRsp_CmdId[HomeSceneJumpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneJumpRsp_CmdId[HomeSceneJumpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSceneJumpRsp_CmdId = exports.HomeSceneJumpRsp_CmdId || (exports.HomeSceneJumpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChooseModuleReq.CmdId
 */
var HomeChooseModuleReq_CmdId;
(function (HomeChooseModuleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChooseModuleReq_CmdId[HomeChooseModuleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4524;
     */
    HomeChooseModuleReq_CmdId[HomeChooseModuleReq_CmdId["CMD_ID"] = 4524] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChooseModuleReq_CmdId[HomeChooseModuleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChooseModuleReq_CmdId[HomeChooseModuleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChooseModuleReq_CmdId[HomeChooseModuleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeChooseModuleReq_CmdId = exports.HomeChooseModuleReq_CmdId || (exports.HomeChooseModuleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChooseModuleRsp.CmdId
 */
var HomeChooseModuleRsp_CmdId;
(function (HomeChooseModuleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChooseModuleRsp_CmdId[HomeChooseModuleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4648;
     */
    HomeChooseModuleRsp_CmdId[HomeChooseModuleRsp_CmdId["CMD_ID"] = 4648] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChooseModuleRsp_CmdId[HomeChooseModuleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChooseModuleRsp_CmdId[HomeChooseModuleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeChooseModuleRsp_CmdId = exports.HomeChooseModuleRsp_CmdId || (exports.HomeChooseModuleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeModuleUnlockNotify.CmdId
 */
var HomeModuleUnlockNotify_CmdId;
(function (HomeModuleUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleUnlockNotify_CmdId[HomeModuleUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4560;
     */
    HomeModuleUnlockNotify_CmdId[HomeModuleUnlockNotify_CmdId["CMD_ID"] = 4560] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleUnlockNotify_CmdId[HomeModuleUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeModuleUnlockNotify_CmdId[HomeModuleUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeModuleUnlockNotify_CmdId = exports.HomeModuleUnlockNotify_CmdId || (exports.HomeModuleUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetOnlineStatusReq.CmdId
 */
var HomeGetOnlineStatusReq_CmdId;
(function (HomeGetOnlineStatusReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetOnlineStatusReq_CmdId[HomeGetOnlineStatusReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4820;
     */
    HomeGetOnlineStatusReq_CmdId[HomeGetOnlineStatusReq_CmdId["CMD_ID"] = 4820] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetOnlineStatusReq_CmdId[HomeGetOnlineStatusReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetOnlineStatusReq_CmdId[HomeGetOnlineStatusReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetOnlineStatusReq_CmdId[HomeGetOnlineStatusReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetOnlineStatusReq_CmdId = exports.HomeGetOnlineStatusReq_CmdId || (exports.HomeGetOnlineStatusReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetOnlineStatusRsp.CmdId
 */
var HomeGetOnlineStatusRsp_CmdId;
(function (HomeGetOnlineStatusRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetOnlineStatusRsp_CmdId[HomeGetOnlineStatusRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4705;
     */
    HomeGetOnlineStatusRsp_CmdId[HomeGetOnlineStatusRsp_CmdId["CMD_ID"] = 4705] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetOnlineStatusRsp_CmdId[HomeGetOnlineStatusRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetOnlineStatusRsp_CmdId[HomeGetOnlineStatusRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGetOnlineStatusRsp_CmdId = exports.HomeGetOnlineStatusRsp_CmdId || (exports.HomeGetOnlineStatusRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeKickPlayerReq.CmdId
 */
var HomeKickPlayerReq_CmdId;
(function (HomeKickPlayerReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeKickPlayerReq_CmdId[HomeKickPlayerReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4870;
     */
    HomeKickPlayerReq_CmdId[HomeKickPlayerReq_CmdId["CMD_ID"] = 4870] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeKickPlayerReq_CmdId[HomeKickPlayerReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeKickPlayerReq_CmdId[HomeKickPlayerReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeKickPlayerReq_CmdId[HomeKickPlayerReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeKickPlayerReq_CmdId = exports.HomeKickPlayerReq_CmdId || (exports.HomeKickPlayerReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeKickPlayerRsp.CmdId
 */
var HomeKickPlayerRsp_CmdId;
(function (HomeKickPlayerRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeKickPlayerRsp_CmdId[HomeKickPlayerRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4691;
     */
    HomeKickPlayerRsp_CmdId[HomeKickPlayerRsp_CmdId["CMD_ID"] = 4691] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeKickPlayerRsp_CmdId[HomeKickPlayerRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeKickPlayerRsp_CmdId[HomeKickPlayerRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeKickPlayerRsp_CmdId = exports.HomeKickPlayerRsp_CmdId || (exports.HomeKickPlayerRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeModuleSeenReq.CmdId
 */
var HomeModuleSeenReq_CmdId;
(function (HomeModuleSeenReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleSeenReq_CmdId[HomeModuleSeenReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4499;
     */
    HomeModuleSeenReq_CmdId[HomeModuleSeenReq_CmdId["CMD_ID"] = 4499] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleSeenReq_CmdId[HomeModuleSeenReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeModuleSeenReq_CmdId[HomeModuleSeenReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeModuleSeenReq_CmdId[HomeModuleSeenReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeModuleSeenReq_CmdId = exports.HomeModuleSeenReq_CmdId || (exports.HomeModuleSeenReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeModuleSeenRsp.CmdId
 */
var HomeModuleSeenRsp_CmdId;
(function (HomeModuleSeenRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleSeenRsp_CmdId[HomeModuleSeenRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4821;
     */
    HomeModuleSeenRsp_CmdId[HomeModuleSeenRsp_CmdId["CMD_ID"] = 4821] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeModuleSeenRsp_CmdId[HomeModuleSeenRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeModuleSeenRsp_CmdId[HomeModuleSeenRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeModuleSeenRsp_CmdId = exports.HomeModuleSeenRsp_CmdId || (exports.HomeModuleSeenRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockedFurnitureFormulaDataNotify.CmdId
 */
var UnlockedFurnitureFormulaDataNotify_CmdId;
(function (UnlockedFurnitureFormulaDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockedFurnitureFormulaDataNotify_CmdId[UnlockedFurnitureFormulaDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4846;
     */
    UnlockedFurnitureFormulaDataNotify_CmdId[UnlockedFurnitureFormulaDataNotify_CmdId["CMD_ID"] = 4846] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockedFurnitureFormulaDataNotify_CmdId[UnlockedFurnitureFormulaDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockedFurnitureFormulaDataNotify_CmdId[UnlockedFurnitureFormulaDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockedFurnitureFormulaDataNotify_CmdId = exports.UnlockedFurnitureFormulaDataNotify_CmdId || (exports.UnlockedFurnitureFormulaDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockedFurnitureSuiteDataNotify.CmdId
 */
var UnlockedFurnitureSuiteDataNotify_CmdId;
(function (UnlockedFurnitureSuiteDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockedFurnitureSuiteDataNotify_CmdId[UnlockedFurnitureSuiteDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4454;
     */
    UnlockedFurnitureSuiteDataNotify_CmdId[UnlockedFurnitureSuiteDataNotify_CmdId["CMD_ID"] = 4454] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockedFurnitureSuiteDataNotify_CmdId[UnlockedFurnitureSuiteDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockedFurnitureSuiteDataNotify_CmdId[UnlockedFurnitureSuiteDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockedFurnitureSuiteDataNotify_CmdId = exports.UnlockedFurnitureSuiteDataNotify_CmdId || (exports.UnlockedFurnitureSuiteDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHomeLevelUpRewardReq.CmdId
 */
var GetHomeLevelUpRewardReq_CmdId;
(function (GetHomeLevelUpRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeLevelUpRewardReq_CmdId[GetHomeLevelUpRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4557;
     */
    GetHomeLevelUpRewardReq_CmdId[GetHomeLevelUpRewardReq_CmdId["CMD_ID"] = 4557] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeLevelUpRewardReq_CmdId[GetHomeLevelUpRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeLevelUpRewardReq_CmdId[GetHomeLevelUpRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeLevelUpRewardReq_CmdId[GetHomeLevelUpRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetHomeLevelUpRewardReq_CmdId = exports.GetHomeLevelUpRewardReq_CmdId || (exports.GetHomeLevelUpRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHomeLevelUpRewardRsp.CmdId
 */
var GetHomeLevelUpRewardRsp_CmdId;
(function (GetHomeLevelUpRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeLevelUpRewardRsp_CmdId[GetHomeLevelUpRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4603;
     */
    GetHomeLevelUpRewardRsp_CmdId[GetHomeLevelUpRewardRsp_CmdId["CMD_ID"] = 4603] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeLevelUpRewardRsp_CmdId[GetHomeLevelUpRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeLevelUpRewardRsp_CmdId[GetHomeLevelUpRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetHomeLevelUpRewardRsp_CmdId = exports.GetHomeLevelUpRewardRsp_CmdId || (exports.GetHomeLevelUpRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetFurnitureCurModuleArrangeCountReq.CmdId
 */
var GetFurnitureCurModuleArrangeCountReq_CmdId;
(function (GetFurnitureCurModuleArrangeCountReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFurnitureCurModuleArrangeCountReq_CmdId[GetFurnitureCurModuleArrangeCountReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4711;
     */
    GetFurnitureCurModuleArrangeCountReq_CmdId[GetFurnitureCurModuleArrangeCountReq_CmdId["CMD_ID"] = 4711] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFurnitureCurModuleArrangeCountReq_CmdId[GetFurnitureCurModuleArrangeCountReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFurnitureCurModuleArrangeCountReq_CmdId[GetFurnitureCurModuleArrangeCountReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFurnitureCurModuleArrangeCountReq_CmdId[GetFurnitureCurModuleArrangeCountReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetFurnitureCurModuleArrangeCountReq_CmdId = exports.GetFurnitureCurModuleArrangeCountReq_CmdId || (exports.GetFurnitureCurModuleArrangeCountReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureCurModuleArrangeCountNotify.CmdId
 */
var FurnitureCurModuleArrangeCountNotify_CmdId;
(function (FurnitureCurModuleArrangeCountNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureCurModuleArrangeCountNotify_CmdId[FurnitureCurModuleArrangeCountNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4498;
     */
    FurnitureCurModuleArrangeCountNotify_CmdId[FurnitureCurModuleArrangeCountNotify_CmdId["CMD_ID"] = 4498] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureCurModuleArrangeCountNotify_CmdId[FurnitureCurModuleArrangeCountNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureCurModuleArrangeCountNotify_CmdId[FurnitureCurModuleArrangeCountNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureCurModuleArrangeCountNotify_CmdId = exports.FurnitureCurModuleArrangeCountNotify_CmdId || (exports.FurnitureCurModuleArrangeCountNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeComfortInfoNotify.CmdId
 */
var HomeComfortInfoNotify_CmdId;
(function (HomeComfortInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeComfortInfoNotify_CmdId[HomeComfortInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4699;
     */
    HomeComfortInfoNotify_CmdId[HomeComfortInfoNotify_CmdId["CMD_ID"] = 4699] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeComfortInfoNotify_CmdId[HomeComfortInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeComfortInfoNotify_CmdId[HomeComfortInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeComfortInfoNotify_CmdId = exports.HomeComfortInfoNotify_CmdId || (exports.HomeComfortInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitFromHomeNotify.QuitReason
 */
var PlayerQuitFromHomeNotify_QuitReason;
(function (PlayerQuitFromHomeNotify_QuitReason) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: KICK_BY_HOST = 1;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["KICK_BY_HOST"] = 1] = "KICK_BY_HOST";
    /**
     * @generated from protobuf enum value: BACK_TO_MY_WORLD = 2;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["BACK_TO_MY_WORLD"] = 2] = "BACK_TO_MY_WORLD";
    /**
     * @generated from protobuf enum value: HOME_BLOCKED = 3;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["HOME_BLOCKED"] = 3] = "HOME_BLOCKED";
    /**
     * @generated from protobuf enum value: HOME_IN_EDIT_MODE = 4;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["HOME_IN_EDIT_MODE"] = 4] = "HOME_IN_EDIT_MODE";
    /**
     * @generated from protobuf enum value: BY_MUIP = 5;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["BY_MUIP"] = 5] = "BY_MUIP";
    /**
     * @generated from protobuf enum value: CUR_MODULE_CLOSED = 6;
     */
    PlayerQuitFromHomeNotify_QuitReason[PlayerQuitFromHomeNotify_QuitReason["CUR_MODULE_CLOSED"] = 6] = "CUR_MODULE_CLOSED";
})(PlayerQuitFromHomeNotify_QuitReason = exports.PlayerQuitFromHomeNotify_QuitReason || (exports.PlayerQuitFromHomeNotify_QuitReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitFromHomeNotify.CmdId
 */
var PlayerQuitFromHomeNotify_CmdId;
(function (PlayerQuitFromHomeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitFromHomeNotify_CmdId[PlayerQuitFromHomeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4656;
     */
    PlayerQuitFromHomeNotify_CmdId[PlayerQuitFromHomeNotify_CmdId["CMD_ID"] = 4656] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitFromHomeNotify_CmdId[PlayerQuitFromHomeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerQuitFromHomeNotify_CmdId[PlayerQuitFromHomeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerQuitFromHomeNotify_CmdId = exports.PlayerQuitFromHomeNotify_CmdId || (exports.PlayerQuitFromHomeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OtherPlayerEnterHomeNotify.Reason
 */
var OtherPlayerEnterHomeNotify_Reason;
(function (OtherPlayerEnterHomeNotify_Reason) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: ENTER = 1;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["ENTER"] = 1] = "ENTER";
    /**
     * @generated from protobuf enum value: LEAVE = 2;
     */
    OtherPlayerEnterHomeNotify_Reason[OtherPlayerEnterHomeNotify_Reason["LEAVE"] = 2] = "LEAVE";
})(OtherPlayerEnterHomeNotify_Reason = exports.OtherPlayerEnterHomeNotify_Reason || (exports.OtherPlayerEnterHomeNotify_Reason = {}));
/**
 * @generated from protobuf enum com.midnights.game.OtherPlayerEnterHomeNotify.CmdId
 */
var OtherPlayerEnterHomeNotify_CmdId;
(function (OtherPlayerEnterHomeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OtherPlayerEnterHomeNotify_CmdId[OtherPlayerEnterHomeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4628;
     */
    OtherPlayerEnterHomeNotify_CmdId[OtherPlayerEnterHomeNotify_CmdId["CMD_ID"] = 4628] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OtherPlayerEnterHomeNotify_CmdId[OtherPlayerEnterHomeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OtherPlayerEnterHomeNotify_CmdId[OtherPlayerEnterHomeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OtherPlayerEnterHomeNotify_CmdId = exports.OtherPlayerEnterHomeNotify_CmdId || (exports.OtherPlayerEnterHomeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePriorCheckNotify.CmdId
 */
var HomePriorCheckNotify_CmdId;
(function (HomePriorCheckNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePriorCheckNotify_CmdId[HomePriorCheckNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4599;
     */
    HomePriorCheckNotify_CmdId[HomePriorCheckNotify_CmdId["CMD_ID"] = 4599] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePriorCheckNotify_CmdId[HomePriorCheckNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePriorCheckNotify_CmdId[HomePriorCheckNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePriorCheckNotify_CmdId = exports.HomePriorCheckNotify_CmdId || (exports.HomePriorCheckNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeMarkPointNotify.CmdId
 */
var HomeMarkPointNotify_CmdId;
(function (HomeMarkPointNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeMarkPointNotify_CmdId[HomeMarkPointNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4474;
     */
    HomeMarkPointNotify_CmdId[HomeMarkPointNotify_CmdId["CMD_ID"] = 4474] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeMarkPointNotify_CmdId[HomeMarkPointNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeMarkPointNotify_CmdId[HomeMarkPointNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeMarkPointNotify_CmdId = exports.HomeMarkPointNotify_CmdId || (exports.HomeMarkPointNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAllUnlockedBgmIdListNotify.CmdId
 */
var HomeAllUnlockedBgmIdListNotify_CmdId;
(function (HomeAllUnlockedBgmIdListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAllUnlockedBgmIdListNotify_CmdId[HomeAllUnlockedBgmIdListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4608;
     */
    HomeAllUnlockedBgmIdListNotify_CmdId[HomeAllUnlockedBgmIdListNotify_CmdId["CMD_ID"] = 4608] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAllUnlockedBgmIdListNotify_CmdId[HomeAllUnlockedBgmIdListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAllUnlockedBgmIdListNotify_CmdId[HomeAllUnlockedBgmIdListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAllUnlockedBgmIdListNotify_CmdId = exports.HomeAllUnlockedBgmIdListNotify_CmdId || (exports.HomeAllUnlockedBgmIdListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeNewUnlockedBgmIdListNotify.CmdId
 */
var HomeNewUnlockedBgmIdListNotify_CmdId;
(function (HomeNewUnlockedBgmIdListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeNewUnlockedBgmIdListNotify_CmdId[HomeNewUnlockedBgmIdListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4847;
     */
    HomeNewUnlockedBgmIdListNotify_CmdId[HomeNewUnlockedBgmIdListNotify_CmdId["CMD_ID"] = 4847] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeNewUnlockedBgmIdListNotify_CmdId[HomeNewUnlockedBgmIdListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeNewUnlockedBgmIdListNotify_CmdId[HomeNewUnlockedBgmIdListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeNewUnlockedBgmIdListNotify_CmdId = exports.HomeNewUnlockedBgmIdListNotify_CmdId || (exports.HomeNewUnlockedBgmIdListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeBgmReq.CmdId
 */
var HomeChangeBgmReq_CmdId;
(function (HomeChangeBgmReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmReq_CmdId[HomeChangeBgmReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4558;
     */
    HomeChangeBgmReq_CmdId[HomeChangeBgmReq_CmdId["CMD_ID"] = 4558] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmReq_CmdId[HomeChangeBgmReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeBgmReq_CmdId[HomeChangeBgmReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeBgmReq_CmdId[HomeChangeBgmReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeChangeBgmReq_CmdId = exports.HomeChangeBgmReq_CmdId || (exports.HomeChangeBgmReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeBgmRsp.CmdId
 */
var HomeChangeBgmRsp_CmdId;
(function (HomeChangeBgmRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmRsp_CmdId[HomeChangeBgmRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4488;
     */
    HomeChangeBgmRsp_CmdId[HomeChangeBgmRsp_CmdId["CMD_ID"] = 4488] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmRsp_CmdId[HomeChangeBgmRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeBgmRsp_CmdId[HomeChangeBgmRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeChangeBgmRsp_CmdId = exports.HomeChangeBgmRsp_CmdId || (exports.HomeChangeBgmRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeChangeBgmNotify.CmdId
 */
var HomeChangeBgmNotify_CmdId;
(function (HomeChangeBgmNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmNotify_CmdId[HomeChangeBgmNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4872;
     */
    HomeChangeBgmNotify_CmdId[HomeChangeBgmNotify_CmdId["CMD_ID"] = 4872] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeChangeBgmNotify_CmdId[HomeChangeBgmNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeChangeBgmNotify_CmdId[HomeChangeBgmNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeChangeBgmNotify_CmdId = exports.HomeChangeBgmNotify_CmdId || (exports.HomeChangeBgmNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePreChangeEditModeNotify.CmdId
 */
var HomePreChangeEditModeNotify_CmdId;
(function (HomePreChangeEditModeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreChangeEditModeNotify_CmdId[HomePreChangeEditModeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4639;
     */
    HomePreChangeEditModeNotify_CmdId[HomePreChangeEditModeNotify_CmdId["CMD_ID"] = 4639] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreChangeEditModeNotify_CmdId[HomePreChangeEditModeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePreChangeEditModeNotify_CmdId[HomePreChangeEditModeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePreChangeEditModeNotify_CmdId = exports.HomePreChangeEditModeNotify_CmdId || (exports.HomePreChangeEditModeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeEnterEditModeFinishReq.CmdId
 */
var HomeEnterEditModeFinishReq_CmdId;
(function (HomeEnterEditModeFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEnterEditModeFinishReq_CmdId[HomeEnterEditModeFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4537;
     */
    HomeEnterEditModeFinishReq_CmdId[HomeEnterEditModeFinishReq_CmdId["CMD_ID"] = 4537] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEnterEditModeFinishReq_CmdId[HomeEnterEditModeFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEnterEditModeFinishReq_CmdId[HomeEnterEditModeFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEnterEditModeFinishReq_CmdId[HomeEnterEditModeFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeEnterEditModeFinishReq_CmdId = exports.HomeEnterEditModeFinishReq_CmdId || (exports.HomeEnterEditModeFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeEnterEditModeFinishRsp.CmdId
 */
var HomeEnterEditModeFinishRsp_CmdId;
(function (HomeEnterEditModeFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEnterEditModeFinishRsp_CmdId[HomeEnterEditModeFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4615;
     */
    HomeEnterEditModeFinishRsp_CmdId[HomeEnterEditModeFinishRsp_CmdId["CMD_ID"] = 4615] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEnterEditModeFinishRsp_CmdId[HomeEnterEditModeFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEnterEditModeFinishRsp_CmdId[HomeEnterEditModeFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeEnterEditModeFinishRsp_CmdId = exports.HomeEnterEditModeFinishRsp_CmdId || (exports.HomeEnterEditModeFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeReq.CmdId
 */
var FurnitureMakeReq_CmdId;
(function (FurnitureMakeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeReq_CmdId[FurnitureMakeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4477;
     */
    FurnitureMakeReq_CmdId[FurnitureMakeReq_CmdId["CMD_ID"] = 4477] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeReq_CmdId[FurnitureMakeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeReq_CmdId[FurnitureMakeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeReq_CmdId[FurnitureMakeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FurnitureMakeReq_CmdId = exports.FurnitureMakeReq_CmdId || (exports.FurnitureMakeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeRsp.CmdId
 */
var FurnitureMakeRsp_CmdId;
(function (FurnitureMakeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeRsp_CmdId[FurnitureMakeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4782;
     */
    FurnitureMakeRsp_CmdId[FurnitureMakeRsp_CmdId["CMD_ID"] = 4782] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeRsp_CmdId[FurnitureMakeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeRsp_CmdId[FurnitureMakeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeRsp_CmdId = exports.FurnitureMakeRsp_CmdId || (exports.FurnitureMakeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeFurnitureMakeReq.CmdId
 */
var TakeFurnitureMakeReq_CmdId;
(function (TakeFurnitureMakeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFurnitureMakeReq_CmdId[TakeFurnitureMakeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4772;
     */
    TakeFurnitureMakeReq_CmdId[TakeFurnitureMakeReq_CmdId["CMD_ID"] = 4772] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFurnitureMakeReq_CmdId[TakeFurnitureMakeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFurnitureMakeReq_CmdId[TakeFurnitureMakeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFurnitureMakeReq_CmdId[TakeFurnitureMakeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeFurnitureMakeReq_CmdId = exports.TakeFurnitureMakeReq_CmdId || (exports.TakeFurnitureMakeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeFurnitureMakeRsp.CmdId
 */
var TakeFurnitureMakeRsp_CmdId;
(function (TakeFurnitureMakeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFurnitureMakeRsp_CmdId[TakeFurnitureMakeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4769;
     */
    TakeFurnitureMakeRsp_CmdId[TakeFurnitureMakeRsp_CmdId["CMD_ID"] = 4769] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFurnitureMakeRsp_CmdId[TakeFurnitureMakeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFurnitureMakeRsp_CmdId[TakeFurnitureMakeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeFurnitureMakeRsp_CmdId = exports.TakeFurnitureMakeRsp_CmdId || (exports.TakeFurnitureMakeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeFinishNotify.CmdId
 */
var FurnitureMakeFinishNotify_CmdId;
(function (FurnitureMakeFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeFinishNotify_CmdId[FurnitureMakeFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4841;
     */
    FurnitureMakeFinishNotify_CmdId[FurnitureMakeFinishNotify_CmdId["CMD_ID"] = 4841] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeFinishNotify_CmdId[FurnitureMakeFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeFinishNotify_CmdId[FurnitureMakeFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeFinishNotify_CmdId = exports.FurnitureMakeFinishNotify_CmdId || (exports.FurnitureMakeFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeStartReq.CmdId
 */
var FurnitureMakeStartReq_CmdId;
(function (FurnitureMakeStartReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeStartReq_CmdId[FurnitureMakeStartReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4633;
     */
    FurnitureMakeStartReq_CmdId[FurnitureMakeStartReq_CmdId["CMD_ID"] = 4633] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeStartReq_CmdId[FurnitureMakeStartReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeStartReq_CmdId[FurnitureMakeStartReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeStartReq_CmdId[FurnitureMakeStartReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FurnitureMakeStartReq_CmdId = exports.FurnitureMakeStartReq_CmdId || (exports.FurnitureMakeStartReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeStartRsp.CmdId
 */
var FurnitureMakeStartRsp_CmdId;
(function (FurnitureMakeStartRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeStartRsp_CmdId[FurnitureMakeStartRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4729;
     */
    FurnitureMakeStartRsp_CmdId[FurnitureMakeStartRsp_CmdId["CMD_ID"] = 4729] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeStartRsp_CmdId[FurnitureMakeStartRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeStartRsp_CmdId[FurnitureMakeStartRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeStartRsp_CmdId = exports.FurnitureMakeStartRsp_CmdId || (exports.FurnitureMakeStartRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeCancelReq.CmdId
 */
var FurnitureMakeCancelReq_CmdId;
(function (FurnitureMakeCancelReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeCancelReq_CmdId[FurnitureMakeCancelReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4555;
     */
    FurnitureMakeCancelReq_CmdId[FurnitureMakeCancelReq_CmdId["CMD_ID"] = 4555] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeCancelReq_CmdId[FurnitureMakeCancelReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeCancelReq_CmdId[FurnitureMakeCancelReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeCancelReq_CmdId[FurnitureMakeCancelReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FurnitureMakeCancelReq_CmdId = exports.FurnitureMakeCancelReq_CmdId || (exports.FurnitureMakeCancelReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeCancelRsp.CmdId
 */
var FurnitureMakeCancelRsp_CmdId;
(function (FurnitureMakeCancelRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeCancelRsp_CmdId[FurnitureMakeCancelRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4683;
     */
    FurnitureMakeCancelRsp_CmdId[FurnitureMakeCancelRsp_CmdId["CMD_ID"] = 4683] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeCancelRsp_CmdId[FurnitureMakeCancelRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeCancelRsp_CmdId[FurnitureMakeCancelRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeCancelRsp_CmdId = exports.FurnitureMakeCancelRsp_CmdId || (exports.FurnitureMakeCancelRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeBeHelpedNotify.CmdId
 */
var FurnitureMakeBeHelpedNotify_CmdId;
(function (FurnitureMakeBeHelpedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeBeHelpedNotify_CmdId[FurnitureMakeBeHelpedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4578;
     */
    FurnitureMakeBeHelpedNotify_CmdId[FurnitureMakeBeHelpedNotify_CmdId["CMD_ID"] = 4578] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeBeHelpedNotify_CmdId[FurnitureMakeBeHelpedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeBeHelpedNotify_CmdId[FurnitureMakeBeHelpedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeBeHelpedNotify_CmdId = exports.FurnitureMakeBeHelpedNotify_CmdId || (exports.FurnitureMakeBeHelpedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeHelpReq.CmdId
 */
var FurnitureMakeHelpReq_CmdId;
(function (FurnitureMakeHelpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeHelpReq_CmdId[FurnitureMakeHelpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4865;
     */
    FurnitureMakeHelpReq_CmdId[FurnitureMakeHelpReq_CmdId["CMD_ID"] = 4865] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeHelpReq_CmdId[FurnitureMakeHelpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeHelpReq_CmdId[FurnitureMakeHelpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeHelpReq_CmdId[FurnitureMakeHelpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FurnitureMakeHelpReq_CmdId = exports.FurnitureMakeHelpReq_CmdId || (exports.FurnitureMakeHelpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FurnitureMakeHelpRsp.CmdId
 */
var FurnitureMakeHelpRsp_CmdId;
(function (FurnitureMakeHelpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeHelpRsp_CmdId[FurnitureMakeHelpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4756;
     */
    FurnitureMakeHelpRsp_CmdId[FurnitureMakeHelpRsp_CmdId["CMD_ID"] = 4756] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FurnitureMakeHelpRsp_CmdId[FurnitureMakeHelpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FurnitureMakeHelpRsp_CmdId[FurnitureMakeHelpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FurnitureMakeHelpRsp_CmdId = exports.FurnitureMakeHelpRsp_CmdId || (exports.FurnitureMakeHelpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FunitureMakeMakeInfoChangeNotify.CmdId
 */
var FunitureMakeMakeInfoChangeNotify_CmdId;
(function (FunitureMakeMakeInfoChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FunitureMakeMakeInfoChangeNotify_CmdId[FunitureMakeMakeInfoChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4898;
     */
    FunitureMakeMakeInfoChangeNotify_CmdId[FunitureMakeMakeInfoChangeNotify_CmdId["CMD_ID"] = 4898] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FunitureMakeMakeInfoChangeNotify_CmdId[FunitureMakeMakeInfoChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FunitureMakeMakeInfoChangeNotify_CmdId[FunitureMakeMakeInfoChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FunitureMakeMakeInfoChangeNotify_CmdId = exports.FunitureMakeMakeInfoChangeNotify_CmdId || (exports.FunitureMakeMakeInfoChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopInfoReq.CmdId
 */
var HomeLimitedShopInfoReq_CmdId;
(function (HomeLimitedShopInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoReq_CmdId[HomeLimitedShopInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4825;
     */
    HomeLimitedShopInfoReq_CmdId[HomeLimitedShopInfoReq_CmdId["CMD_ID"] = 4825] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoReq_CmdId[HomeLimitedShopInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoReq_CmdId[HomeLimitedShopInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoReq_CmdId[HomeLimitedShopInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeLimitedShopInfoReq_CmdId = exports.HomeLimitedShopInfoReq_CmdId || (exports.HomeLimitedShopInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopInfoRsp.CmdId
 */
var HomeLimitedShopInfoRsp_CmdId;
(function (HomeLimitedShopInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoRsp_CmdId[HomeLimitedShopInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4796;
     */
    HomeLimitedShopInfoRsp_CmdId[HomeLimitedShopInfoRsp_CmdId["CMD_ID"] = 4796] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoRsp_CmdId[HomeLimitedShopInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoRsp_CmdId[HomeLimitedShopInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeLimitedShopInfoRsp_CmdId = exports.HomeLimitedShopInfoRsp_CmdId || (exports.HomeLimitedShopInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopInfoNotify.CmdId
 */
var HomeLimitedShopInfoNotify_CmdId;
(function (HomeLimitedShopInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoNotify_CmdId[HomeLimitedShopInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4887;
     */
    HomeLimitedShopInfoNotify_CmdId[HomeLimitedShopInfoNotify_CmdId["CMD_ID"] = 4887] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoNotify_CmdId[HomeLimitedShopInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoNotify_CmdId[HomeLimitedShopInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoNotify_CmdId[HomeLimitedShopInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeLimitedShopInfoNotify_CmdId = exports.HomeLimitedShopInfoNotify_CmdId || (exports.HomeLimitedShopInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopGoodsListReq.CmdId
 */
var HomeLimitedShopGoodsListReq_CmdId;
(function (HomeLimitedShopGoodsListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopGoodsListReq_CmdId[HomeLimitedShopGoodsListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4552;
     */
    HomeLimitedShopGoodsListReq_CmdId[HomeLimitedShopGoodsListReq_CmdId["CMD_ID"] = 4552] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopGoodsListReq_CmdId[HomeLimitedShopGoodsListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopGoodsListReq_CmdId[HomeLimitedShopGoodsListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopGoodsListReq_CmdId[HomeLimitedShopGoodsListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeLimitedShopGoodsListReq_CmdId = exports.HomeLimitedShopGoodsListReq_CmdId || (exports.HomeLimitedShopGoodsListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopGoodsListRsp.CmdId
 */
var HomeLimitedShopGoodsListRsp_CmdId;
(function (HomeLimitedShopGoodsListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopGoodsListRsp_CmdId[HomeLimitedShopGoodsListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4546;
     */
    HomeLimitedShopGoodsListRsp_CmdId[HomeLimitedShopGoodsListRsp_CmdId["CMD_ID"] = 4546] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopGoodsListRsp_CmdId[HomeLimitedShopGoodsListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopGoodsListRsp_CmdId[HomeLimitedShopGoodsListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeLimitedShopGoodsListRsp_CmdId = exports.HomeLimitedShopGoodsListRsp_CmdId || (exports.HomeLimitedShopGoodsListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopBuyGoodsReq.CmdId
 */
var HomeLimitedShopBuyGoodsReq_CmdId;
(function (HomeLimitedShopBuyGoodsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopBuyGoodsReq_CmdId[HomeLimitedShopBuyGoodsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4760;
     */
    HomeLimitedShopBuyGoodsReq_CmdId[HomeLimitedShopBuyGoodsReq_CmdId["CMD_ID"] = 4760] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopBuyGoodsReq_CmdId[HomeLimitedShopBuyGoodsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopBuyGoodsReq_CmdId[HomeLimitedShopBuyGoodsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopBuyGoodsReq_CmdId[HomeLimitedShopBuyGoodsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeLimitedShopBuyGoodsReq_CmdId = exports.HomeLimitedShopBuyGoodsReq_CmdId || (exports.HomeLimitedShopBuyGoodsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopBuyGoodsRsp.CmdId
 */
var HomeLimitedShopBuyGoodsRsp_CmdId;
(function (HomeLimitedShopBuyGoodsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopBuyGoodsRsp_CmdId[HomeLimitedShopBuyGoodsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4750;
     */
    HomeLimitedShopBuyGoodsRsp_CmdId[HomeLimitedShopBuyGoodsRsp_CmdId["CMD_ID"] = 4750] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopBuyGoodsRsp_CmdId[HomeLimitedShopBuyGoodsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopBuyGoodsRsp_CmdId[HomeLimitedShopBuyGoodsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeLimitedShopBuyGoodsRsp_CmdId = exports.HomeLimitedShopBuyGoodsRsp_CmdId || (exports.HomeLimitedShopBuyGoodsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeLimitedShopInfoChangeNotify.CmdId
 */
var HomeLimitedShopInfoChangeNotify_CmdId;
(function (HomeLimitedShopInfoChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoChangeNotify_CmdId[HomeLimitedShopInfoChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4790;
     */
    HomeLimitedShopInfoChangeNotify_CmdId[HomeLimitedShopInfoChangeNotify_CmdId["CMD_ID"] = 4790] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeLimitedShopInfoChangeNotify_CmdId[HomeLimitedShopInfoChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeLimitedShopInfoChangeNotify_CmdId[HomeLimitedShopInfoChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeLimitedShopInfoChangeNotify_CmdId = exports.HomeLimitedShopInfoChangeNotify_CmdId || (exports.HomeLimitedShopInfoChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeResourceNotify.CmdId
 */
var HomeResourceNotify_CmdId;
(function (HomeResourceNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceNotify_CmdId[HomeResourceNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4892;
     */
    HomeResourceNotify_CmdId[HomeResourceNotify_CmdId["CMD_ID"] = 4892] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceNotify_CmdId[HomeResourceNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceNotify_CmdId[HomeResourceNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeResourceNotify_CmdId = exports.HomeResourceNotify_CmdId || (exports.HomeResourceNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeResourceTakeHomeCoinReq.CmdId
 */
var HomeResourceTakeHomeCoinReq_CmdId;
(function (HomeResourceTakeHomeCoinReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeHomeCoinReq_CmdId[HomeResourceTakeHomeCoinReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4479;
     */
    HomeResourceTakeHomeCoinReq_CmdId[HomeResourceTakeHomeCoinReq_CmdId["CMD_ID"] = 4479] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeHomeCoinReq_CmdId[HomeResourceTakeHomeCoinReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeHomeCoinReq_CmdId[HomeResourceTakeHomeCoinReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeHomeCoinReq_CmdId[HomeResourceTakeHomeCoinReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeResourceTakeHomeCoinReq_CmdId = exports.HomeResourceTakeHomeCoinReq_CmdId || (exports.HomeResourceTakeHomeCoinReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeResourceTakeHomeCoinRsp.CmdId
 */
var HomeResourceTakeHomeCoinRsp_CmdId;
(function (HomeResourceTakeHomeCoinRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeHomeCoinRsp_CmdId[HomeResourceTakeHomeCoinRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4541;
     */
    HomeResourceTakeHomeCoinRsp_CmdId[HomeResourceTakeHomeCoinRsp_CmdId["CMD_ID"] = 4541] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeHomeCoinRsp_CmdId[HomeResourceTakeHomeCoinRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeHomeCoinRsp_CmdId[HomeResourceTakeHomeCoinRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeResourceTakeHomeCoinRsp_CmdId = exports.HomeResourceTakeHomeCoinRsp_CmdId || (exports.HomeResourceTakeHomeCoinRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeResourceTakeFetterExpReq.CmdId
 */
var HomeResourceTakeFetterExpReq_CmdId;
(function (HomeResourceTakeFetterExpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeFetterExpReq_CmdId[HomeResourceTakeFetterExpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4768;
     */
    HomeResourceTakeFetterExpReq_CmdId[HomeResourceTakeFetterExpReq_CmdId["CMD_ID"] = 4768] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeFetterExpReq_CmdId[HomeResourceTakeFetterExpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeFetterExpReq_CmdId[HomeResourceTakeFetterExpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeFetterExpReq_CmdId[HomeResourceTakeFetterExpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeResourceTakeFetterExpReq_CmdId = exports.HomeResourceTakeFetterExpReq_CmdId || (exports.HomeResourceTakeFetterExpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeResourceTakeFetterExpRsp.CmdId
 */
var HomeResourceTakeFetterExpRsp_CmdId;
(function (HomeResourceTakeFetterExpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeFetterExpRsp_CmdId[HomeResourceTakeFetterExpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4645;
     */
    HomeResourceTakeFetterExpRsp_CmdId[HomeResourceTakeFetterExpRsp_CmdId["CMD_ID"] = 4645] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeResourceTakeFetterExpRsp_CmdId[HomeResourceTakeFetterExpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeResourceTakeFetterExpRsp_CmdId[HomeResourceTakeFetterExpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeResourceTakeFetterExpRsp_CmdId = exports.HomeResourceTakeFetterExpRsp_CmdId || (exports.HomeResourceTakeFetterExpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarTalkFinishInfoNotify.CmdId
 */
var HomeAvatarTalkFinishInfoNotify_CmdId;
(function (HomeAvatarTalkFinishInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkFinishInfoNotify_CmdId[HomeAvatarTalkFinishInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4896;
     */
    HomeAvatarTalkFinishInfoNotify_CmdId[HomeAvatarTalkFinishInfoNotify_CmdId["CMD_ID"] = 4896] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkFinishInfoNotify_CmdId[HomeAvatarTalkFinishInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarTalkFinishInfoNotify_CmdId[HomeAvatarTalkFinishInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarTalkFinishInfoNotify_CmdId = exports.HomeAvatarTalkFinishInfoNotify_CmdId || (exports.HomeAvatarTalkFinishInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarTalkReq.CmdId
 */
var HomeAvatarTalkReq_CmdId;
(function (HomeAvatarTalkReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkReq_CmdId[HomeAvatarTalkReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4688;
     */
    HomeAvatarTalkReq_CmdId[HomeAvatarTalkReq_CmdId["CMD_ID"] = 4688] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkReq_CmdId[HomeAvatarTalkReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarTalkReq_CmdId[HomeAvatarTalkReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarTalkReq_CmdId[HomeAvatarTalkReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeAvatarTalkReq_CmdId = exports.HomeAvatarTalkReq_CmdId || (exports.HomeAvatarTalkReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarTalkRsp.CmdId
 */
var HomeAvatarTalkRsp_CmdId;
(function (HomeAvatarTalkRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkRsp_CmdId[HomeAvatarTalkRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4464;
     */
    HomeAvatarTalkRsp_CmdId[HomeAvatarTalkRsp_CmdId["CMD_ID"] = 4464] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarTalkRsp_CmdId[HomeAvatarTalkRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarTalkRsp_CmdId[HomeAvatarTalkRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarTalkRsp_CmdId = exports.HomeAvatarTalkRsp_CmdId || (exports.HomeAvatarTalkRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarRewardEventNotify.CmdId
 */
var HomeAvatarRewardEventNotify_CmdId;
(function (HomeAvatarRewardEventNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventNotify_CmdId[HomeAvatarRewardEventNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4852;
     */
    HomeAvatarRewardEventNotify_CmdId[HomeAvatarRewardEventNotify_CmdId["CMD_ID"] = 4852] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventNotify_CmdId[HomeAvatarRewardEventNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarRewardEventNotify_CmdId[HomeAvatarRewardEventNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarRewardEventNotify_CmdId = exports.HomeAvatarRewardEventNotify_CmdId || (exports.HomeAvatarRewardEventNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarRewardEventGetReq.CmdId
 */
var HomeAvatarRewardEventGetReq_CmdId;
(function (HomeAvatarRewardEventGetReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventGetReq_CmdId[HomeAvatarRewardEventGetReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4551;
     */
    HomeAvatarRewardEventGetReq_CmdId[HomeAvatarRewardEventGetReq_CmdId["CMD_ID"] = 4551] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventGetReq_CmdId[HomeAvatarRewardEventGetReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarRewardEventGetReq_CmdId[HomeAvatarRewardEventGetReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarRewardEventGetReq_CmdId[HomeAvatarRewardEventGetReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeAvatarRewardEventGetReq_CmdId = exports.HomeAvatarRewardEventGetReq_CmdId || (exports.HomeAvatarRewardEventGetReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarRewardEventGetRsp.CmdId
 */
var HomeAvatarRewardEventGetRsp_CmdId;
(function (HomeAvatarRewardEventGetRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventGetRsp_CmdId[HomeAvatarRewardEventGetRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4833;
     */
    HomeAvatarRewardEventGetRsp_CmdId[HomeAvatarRewardEventGetRsp_CmdId["CMD_ID"] = 4833] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarRewardEventGetRsp_CmdId[HomeAvatarRewardEventGetRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarRewardEventGetRsp_CmdId[HomeAvatarRewardEventGetRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarRewardEventGetRsp_CmdId = exports.HomeAvatarRewardEventGetRsp_CmdId || (exports.HomeAvatarRewardEventGetRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarSummonAllEventNotify.CmdId
 */
var HomeAvatarSummonAllEventNotify_CmdId;
(function (HomeAvatarSummonAllEventNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonAllEventNotify_CmdId[HomeAvatarSummonAllEventNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4808;
     */
    HomeAvatarSummonAllEventNotify_CmdId[HomeAvatarSummonAllEventNotify_CmdId["CMD_ID"] = 4808] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonAllEventNotify_CmdId[HomeAvatarSummonAllEventNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonAllEventNotify_CmdId[HomeAvatarSummonAllEventNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarSummonAllEventNotify_CmdId = exports.HomeAvatarSummonAllEventNotify_CmdId || (exports.HomeAvatarSummonAllEventNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarSummonEventReq.CmdId
 */
var HomeAvatarSummonEventReq_CmdId;
(function (HomeAvatarSummonEventReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonEventReq_CmdId[HomeAvatarSummonEventReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4806;
     */
    HomeAvatarSummonEventReq_CmdId[HomeAvatarSummonEventReq_CmdId["CMD_ID"] = 4806] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonEventReq_CmdId[HomeAvatarSummonEventReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonEventReq_CmdId[HomeAvatarSummonEventReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonEventReq_CmdId[HomeAvatarSummonEventReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeAvatarSummonEventReq_CmdId = exports.HomeAvatarSummonEventReq_CmdId || (exports.HomeAvatarSummonEventReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarSummonEventRsp.CmdId
 */
var HomeAvatarSummonEventRsp_CmdId;
(function (HomeAvatarSummonEventRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonEventRsp_CmdId[HomeAvatarSummonEventRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4817;
     */
    HomeAvatarSummonEventRsp_CmdId[HomeAvatarSummonEventRsp_CmdId["CMD_ID"] = 4817] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonEventRsp_CmdId[HomeAvatarSummonEventRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonEventRsp_CmdId[HomeAvatarSummonEventRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarSummonEventRsp_CmdId = exports.HomeAvatarSummonEventRsp_CmdId || (exports.HomeAvatarSummonEventRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarCostumeChangeNotify.CmdId
 */
var HomeAvatarCostumeChangeNotify_CmdId;
(function (HomeAvatarCostumeChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarCostumeChangeNotify_CmdId[HomeAvatarCostumeChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4748;
     */
    HomeAvatarCostumeChangeNotify_CmdId[HomeAvatarCostumeChangeNotify_CmdId["CMD_ID"] = 4748] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarCostumeChangeNotify_CmdId[HomeAvatarCostumeChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarCostumeChangeNotify_CmdId[HomeAvatarCostumeChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarCostumeChangeNotify_CmdId = exports.HomeAvatarCostumeChangeNotify_CmdId || (exports.HomeAvatarCostumeChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarSummonFinishReq.CmdId
 */
var HomeAvatarSummonFinishReq_CmdId;
(function (HomeAvatarSummonFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonFinishReq_CmdId[HomeAvatarSummonFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4629;
     */
    HomeAvatarSummonFinishReq_CmdId[HomeAvatarSummonFinishReq_CmdId["CMD_ID"] = 4629] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonFinishReq_CmdId[HomeAvatarSummonFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonFinishReq_CmdId[HomeAvatarSummonFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonFinishReq_CmdId[HomeAvatarSummonFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeAvatarSummonFinishReq_CmdId = exports.HomeAvatarSummonFinishReq_CmdId || (exports.HomeAvatarSummonFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarSummonFinishRsp.CmdId
 */
var HomeAvatarSummonFinishRsp_CmdId;
(function (HomeAvatarSummonFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonFinishRsp_CmdId[HomeAvatarSummonFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4696;
     */
    HomeAvatarSummonFinishRsp_CmdId[HomeAvatarSummonFinishRsp_CmdId["CMD_ID"] = 4696] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarSummonFinishRsp_CmdId[HomeAvatarSummonFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarSummonFinishRsp_CmdId[HomeAvatarSummonFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarSummonFinishRsp_CmdId = exports.HomeAvatarSummonFinishRsp_CmdId || (exports.HomeAvatarSummonFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvtarAllFinishRewardNotify.CmdId
 */
var HomeAvtarAllFinishRewardNotify_CmdId;
(function (HomeAvtarAllFinishRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvtarAllFinishRewardNotify_CmdId[HomeAvtarAllFinishRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4453;
     */
    HomeAvtarAllFinishRewardNotify_CmdId[HomeAvtarAllFinishRewardNotify_CmdId["CMD_ID"] = 4453] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvtarAllFinishRewardNotify_CmdId[HomeAvtarAllFinishRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvtarAllFinishRewardNotify_CmdId[HomeAvtarAllFinishRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvtarAllFinishRewardNotify_CmdId = exports.HomeAvtarAllFinishRewardNotify_CmdId || (exports.HomeAvtarAllFinishRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeAvatarAllFinishRewardNotify.CmdId
 */
var HomeAvatarAllFinishRewardNotify_CmdId;
(function (HomeAvatarAllFinishRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarAllFinishRewardNotify_CmdId[HomeAvatarAllFinishRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4741;
     */
    HomeAvatarAllFinishRewardNotify_CmdId[HomeAvatarAllFinishRewardNotify_CmdId["CMD_ID"] = 4741] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeAvatarAllFinishRewardNotify_CmdId[HomeAvatarAllFinishRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeAvatarAllFinishRewardNotify_CmdId[HomeAvatarAllFinishRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeAvatarAllFinishRewardNotify_CmdId = exports.HomeAvatarAllFinishRewardNotify_CmdId || (exports.HomeAvatarAllFinishRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSceneInitFinishReq.CmdId
 */
var HomeSceneInitFinishReq_CmdId;
(function (HomeSceneInitFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneInitFinishReq_CmdId[HomeSceneInitFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4674;
     */
    HomeSceneInitFinishReq_CmdId[HomeSceneInitFinishReq_CmdId["CMD_ID"] = 4674] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneInitFinishReq_CmdId[HomeSceneInitFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneInitFinishReq_CmdId[HomeSceneInitFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneInitFinishReq_CmdId[HomeSceneInitFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSceneInitFinishReq_CmdId = exports.HomeSceneInitFinishReq_CmdId || (exports.HomeSceneInitFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSceneInitFinishRsp.CmdId
 */
var HomeSceneInitFinishRsp_CmdId;
(function (HomeSceneInitFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneInitFinishRsp_CmdId[HomeSceneInitFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4505;
     */
    HomeSceneInitFinishRsp_CmdId[HomeSceneInitFinishRsp_CmdId["CMD_ID"] = 4505] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSceneInitFinishRsp_CmdId[HomeSceneInitFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSceneInitFinishRsp_CmdId[HomeSceneInitFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSceneInitFinishRsp_CmdId = exports.HomeSceneInitFinishRsp_CmdId || (exports.HomeSceneInitFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantSeedReq.CmdId
 */
var HomePlantSeedReq_CmdId;
(function (HomePlantSeedReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantSeedReq_CmdId[HomePlantSeedReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4804;
     */
    HomePlantSeedReq_CmdId[HomePlantSeedReq_CmdId["CMD_ID"] = 4804] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantSeedReq_CmdId[HomePlantSeedReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantSeedReq_CmdId[HomePlantSeedReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantSeedReq_CmdId[HomePlantSeedReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomePlantSeedReq_CmdId = exports.HomePlantSeedReq_CmdId || (exports.HomePlantSeedReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantSeedRsp.CmdId
 */
var HomePlantSeedRsp_CmdId;
(function (HomePlantSeedRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantSeedRsp_CmdId[HomePlantSeedRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4556;
     */
    HomePlantSeedRsp_CmdId[HomePlantSeedRsp_CmdId["CMD_ID"] = 4556] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantSeedRsp_CmdId[HomePlantSeedRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantSeedRsp_CmdId[HomePlantSeedRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePlantSeedRsp_CmdId = exports.HomePlantSeedRsp_CmdId || (exports.HomePlantSeedRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantWeedReq.CmdId
 */
var HomePlantWeedReq_CmdId;
(function (HomePlantWeedReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantWeedReq_CmdId[HomePlantWeedReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4640;
     */
    HomePlantWeedReq_CmdId[HomePlantWeedReq_CmdId["CMD_ID"] = 4640] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantWeedReq_CmdId[HomePlantWeedReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantWeedReq_CmdId[HomePlantWeedReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantWeedReq_CmdId[HomePlantWeedReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomePlantWeedReq_CmdId = exports.HomePlantWeedReq_CmdId || (exports.HomePlantWeedReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantWeedRsp.CmdId
 */
var HomePlantWeedRsp_CmdId;
(function (HomePlantWeedRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantWeedRsp_CmdId[HomePlantWeedRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4527;
     */
    HomePlantWeedRsp_CmdId[HomePlantWeedRsp_CmdId["CMD_ID"] = 4527] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantWeedRsp_CmdId[HomePlantWeedRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantWeedRsp_CmdId[HomePlantWeedRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePlantWeedRsp_CmdId = exports.HomePlantWeedRsp_CmdId || (exports.HomePlantWeedRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantInfoNotify.CmdId
 */
var HomePlantInfoNotify_CmdId;
(function (HomePlantInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoNotify_CmdId[HomePlantInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4587;
     */
    HomePlantInfoNotify_CmdId[HomePlantInfoNotify_CmdId["CMD_ID"] = 4587] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoNotify_CmdId[HomePlantInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantInfoNotify_CmdId[HomePlantInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePlantInfoNotify_CmdId = exports.HomePlantInfoNotify_CmdId || (exports.HomePlantInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantFieldNotify.CmdId
 */
var HomePlantFieldNotify_CmdId;
(function (HomePlantFieldNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantFieldNotify_CmdId[HomePlantFieldNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4549;
     */
    HomePlantFieldNotify_CmdId[HomePlantFieldNotify_CmdId["CMD_ID"] = 4549] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantFieldNotify_CmdId[HomePlantFieldNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantFieldNotify_CmdId[HomePlantFieldNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePlantFieldNotify_CmdId = exports.HomePlantFieldNotify_CmdId || (exports.HomePlantFieldNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantInfoReq.CmdId
 */
var HomePlantInfoReq_CmdId;
(function (HomePlantInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoReq_CmdId[HomePlantInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4647;
     */
    HomePlantInfoReq_CmdId[HomePlantInfoReq_CmdId["CMD_ID"] = 4647] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoReq_CmdId[HomePlantInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantInfoReq_CmdId[HomePlantInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantInfoReq_CmdId[HomePlantInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomePlantInfoReq_CmdId = exports.HomePlantInfoReq_CmdId || (exports.HomePlantInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantInfoRsp.CmdId
 */
var HomePlantInfoRsp_CmdId;
(function (HomePlantInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoRsp_CmdId[HomePlantInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4701;
     */
    HomePlantInfoRsp_CmdId[HomePlantInfoRsp_CmdId["CMD_ID"] = 4701] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePlantInfoRsp_CmdId[HomePlantInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantInfoRsp_CmdId[HomePlantInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePlantInfoRsp_CmdId[HomePlantInfoRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomePlantInfoRsp_CmdId = exports.HomePlantInfoRsp_CmdId || (exports.HomePlantInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeTransferReq.CmdId
 */
var HomeTransferReq_CmdId;
(function (HomeTransferReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeTransferReq_CmdId[HomeTransferReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4726;
     */
    HomeTransferReq_CmdId[HomeTransferReq_CmdId["CMD_ID"] = 4726] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeTransferReq_CmdId[HomeTransferReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeTransferReq_CmdId[HomeTransferReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeTransferReq_CmdId[HomeTransferReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeTransferReq_CmdId = exports.HomeTransferReq_CmdId || (exports.HomeTransferReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeTransferRsp.CmdId
 */
var HomeTransferRsp_CmdId;
(function (HomeTransferRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeTransferRsp_CmdId[HomeTransferRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4616;
     */
    HomeTransferRsp_CmdId[HomeTransferRsp_CmdId["CMD_ID"] = 4616] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeTransferRsp_CmdId[HomeTransferRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeTransferRsp_CmdId[HomeTransferRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeTransferRsp_CmdId[HomeTransferRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeTransferRsp_CmdId = exports.HomeTransferRsp_CmdId || (exports.HomeTransferRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetFishFarmingInfoReq.CmdId
 */
var HomeGetFishFarmingInfoReq_CmdId;
(function (HomeGetFishFarmingInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetFishFarmingInfoReq_CmdId[HomeGetFishFarmingInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4476;
     */
    HomeGetFishFarmingInfoReq_CmdId[HomeGetFishFarmingInfoReq_CmdId["CMD_ID"] = 4476] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetFishFarmingInfoReq_CmdId[HomeGetFishFarmingInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetFishFarmingInfoReq_CmdId[HomeGetFishFarmingInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetFishFarmingInfoReq_CmdId[HomeGetFishFarmingInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetFishFarmingInfoReq_CmdId = exports.HomeGetFishFarmingInfoReq_CmdId || (exports.HomeGetFishFarmingInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetFishFarmingInfoRsp.CmdId
 */
var HomeGetFishFarmingInfoRsp_CmdId;
(function (HomeGetFishFarmingInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetFishFarmingInfoRsp_CmdId[HomeGetFishFarmingInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4678;
     */
    HomeGetFishFarmingInfoRsp_CmdId[HomeGetFishFarmingInfoRsp_CmdId["CMD_ID"] = 4678] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetFishFarmingInfoRsp_CmdId[HomeGetFishFarmingInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetFishFarmingInfoRsp_CmdId[HomeGetFishFarmingInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGetFishFarmingInfoRsp_CmdId = exports.HomeGetFishFarmingInfoRsp_CmdId || (exports.HomeGetFishFarmingInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeFishFarmingInfoNotify.CmdId
 */
var HomeFishFarmingInfoNotify_CmdId;
(function (HomeFishFarmingInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeFishFarmingInfoNotify_CmdId[HomeFishFarmingInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4677;
     */
    HomeFishFarmingInfoNotify_CmdId[HomeFishFarmingInfoNotify_CmdId["CMD_ID"] = 4677] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeFishFarmingInfoNotify_CmdId[HomeFishFarmingInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeFishFarmingInfoNotify_CmdId[HomeFishFarmingInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeFishFarmingInfoNotify_CmdId = exports.HomeFishFarmingInfoNotify_CmdId || (exports.HomeFishFarmingInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateFishFarmingInfoReq.CmdId
 */
var HomeUpdateFishFarmingInfoReq_CmdId;
(function (HomeUpdateFishFarmingInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateFishFarmingInfoReq_CmdId[HomeUpdateFishFarmingInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4544;
     */
    HomeUpdateFishFarmingInfoReq_CmdId[HomeUpdateFishFarmingInfoReq_CmdId["CMD_ID"] = 4544] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateFishFarmingInfoReq_CmdId[HomeUpdateFishFarmingInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateFishFarmingInfoReq_CmdId[HomeUpdateFishFarmingInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateFishFarmingInfoReq_CmdId[HomeUpdateFishFarmingInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeUpdateFishFarmingInfoReq_CmdId = exports.HomeUpdateFishFarmingInfoReq_CmdId || (exports.HomeUpdateFishFarmingInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateFishFarmingInfoRsp.CmdId
 */
var HomeUpdateFishFarmingInfoRsp_CmdId;
(function (HomeUpdateFishFarmingInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateFishFarmingInfoRsp_CmdId[HomeUpdateFishFarmingInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4857;
     */
    HomeUpdateFishFarmingInfoRsp_CmdId[HomeUpdateFishFarmingInfoRsp_CmdId["CMD_ID"] = 4857] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateFishFarmingInfoRsp_CmdId[HomeUpdateFishFarmingInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateFishFarmingInfoRsp_CmdId[HomeUpdateFishFarmingInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeUpdateFishFarmingInfoRsp_CmdId = exports.HomeUpdateFishFarmingInfoRsp_CmdId || (exports.HomeUpdateFishFarmingInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateScenePointFishFarmingInfoReq.CmdId
 */
var HomeUpdateScenePointFishFarmingInfoReq_CmdId;
(function (HomeUpdateScenePointFishFarmingInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateScenePointFishFarmingInfoReq_CmdId[HomeUpdateScenePointFishFarmingInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4511;
     */
    HomeUpdateScenePointFishFarmingInfoReq_CmdId[HomeUpdateScenePointFishFarmingInfoReq_CmdId["CMD_ID"] = 4511] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateScenePointFishFarmingInfoReq_CmdId[HomeUpdateScenePointFishFarmingInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateScenePointFishFarmingInfoReq_CmdId[HomeUpdateScenePointFishFarmingInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateScenePointFishFarmingInfoReq_CmdId[HomeUpdateScenePointFishFarmingInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeUpdateScenePointFishFarmingInfoReq_CmdId = exports.HomeUpdateScenePointFishFarmingInfoReq_CmdId || (exports.HomeUpdateScenePointFishFarmingInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdateScenePointFishFarmingInfoRsp.CmdId
 */
var HomeUpdateScenePointFishFarmingInfoRsp_CmdId;
(function (HomeUpdateScenePointFishFarmingInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateScenePointFishFarmingInfoRsp_CmdId[HomeUpdateScenePointFishFarmingInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4540;
     */
    HomeUpdateScenePointFishFarmingInfoRsp_CmdId[HomeUpdateScenePointFishFarmingInfoRsp_CmdId["CMD_ID"] = 4540] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdateScenePointFishFarmingInfoRsp_CmdId[HomeUpdateScenePointFishFarmingInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdateScenePointFishFarmingInfoRsp_CmdId[HomeUpdateScenePointFishFarmingInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeUpdateScenePointFishFarmingInfoRsp_CmdId = exports.HomeUpdateScenePointFishFarmingInfoRsp_CmdId || (exports.HomeUpdateScenePointFishFarmingInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeScenePointFishFarmingInfoNotify.CmdId
 */
var HomeScenePointFishFarmingInfoNotify_CmdId;
(function (HomeScenePointFishFarmingInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeScenePointFishFarmingInfoNotify_CmdId[HomeScenePointFishFarmingInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4547;
     */
    HomeScenePointFishFarmingInfoNotify_CmdId[HomeScenePointFishFarmingInfoNotify_CmdId["CMD_ID"] = 4547] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeScenePointFishFarmingInfoNotify_CmdId[HomeScenePointFishFarmingInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeScenePointFishFarmingInfoNotify_CmdId[HomeScenePointFishFarmingInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeScenePointFishFarmingInfoNotify_CmdId = exports.HomeScenePointFishFarmingInfoNotify_CmdId || (exports.HomeScenePointFishFarmingInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeCustomFurnitureInfoNotify.CmdId
 */
var HomeCustomFurnitureInfoNotify_CmdId;
(function (HomeCustomFurnitureInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCustomFurnitureInfoNotify_CmdId[HomeCustomFurnitureInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4712;
     */
    HomeCustomFurnitureInfoNotify_CmdId[HomeCustomFurnitureInfoNotify_CmdId["CMD_ID"] = 4712] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCustomFurnitureInfoNotify_CmdId[HomeCustomFurnitureInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeCustomFurnitureInfoNotify_CmdId[HomeCustomFurnitureInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeCustomFurnitureInfoNotify_CmdId = exports.HomeCustomFurnitureInfoNotify_CmdId || (exports.HomeCustomFurnitureInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeEditCustomFurnitureReq.CmdId
 */
var HomeEditCustomFurnitureReq_CmdId;
(function (HomeEditCustomFurnitureReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEditCustomFurnitureReq_CmdId[HomeEditCustomFurnitureReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4724;
     */
    HomeEditCustomFurnitureReq_CmdId[HomeEditCustomFurnitureReq_CmdId["CMD_ID"] = 4724] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEditCustomFurnitureReq_CmdId[HomeEditCustomFurnitureReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEditCustomFurnitureReq_CmdId[HomeEditCustomFurnitureReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEditCustomFurnitureReq_CmdId[HomeEditCustomFurnitureReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeEditCustomFurnitureReq_CmdId = exports.HomeEditCustomFurnitureReq_CmdId || (exports.HomeEditCustomFurnitureReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeEditCustomFurnitureRsp.CmdId
 */
var HomeEditCustomFurnitureRsp_CmdId;
(function (HomeEditCustomFurnitureRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEditCustomFurnitureRsp_CmdId[HomeEditCustomFurnitureRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4496;
     */
    HomeEditCustomFurnitureRsp_CmdId[HomeEditCustomFurnitureRsp_CmdId["CMD_ID"] = 4496] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeEditCustomFurnitureRsp_CmdId[HomeEditCustomFurnitureRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeEditCustomFurnitureRsp_CmdId[HomeEditCustomFurnitureRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeEditCustomFurnitureRsp_CmdId = exports.HomeEditCustomFurnitureRsp_CmdId || (exports.HomeEditCustomFurnitureRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePictureFrameInfoNotify.CmdId
 */
var HomePictureFrameInfoNotify_CmdId;
(function (HomePictureFrameInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePictureFrameInfoNotify_CmdId[HomePictureFrameInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4878;
     */
    HomePictureFrameInfoNotify_CmdId[HomePictureFrameInfoNotify_CmdId["CMD_ID"] = 4878] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePictureFrameInfoNotify_CmdId[HomePictureFrameInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePictureFrameInfoNotify_CmdId[HomePictureFrameInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePictureFrameInfoNotify_CmdId = exports.HomePictureFrameInfoNotify_CmdId || (exports.HomePictureFrameInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdatePictureFrameInfoReq.CmdId
 */
var HomeUpdatePictureFrameInfoReq_CmdId;
(function (HomeUpdatePictureFrameInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdatePictureFrameInfoReq_CmdId[HomeUpdatePictureFrameInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4486;
     */
    HomeUpdatePictureFrameInfoReq_CmdId[HomeUpdatePictureFrameInfoReq_CmdId["CMD_ID"] = 4486] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdatePictureFrameInfoReq_CmdId[HomeUpdatePictureFrameInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdatePictureFrameInfoReq_CmdId[HomeUpdatePictureFrameInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdatePictureFrameInfoReq_CmdId[HomeUpdatePictureFrameInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeUpdatePictureFrameInfoReq_CmdId = exports.HomeUpdatePictureFrameInfoReq_CmdId || (exports.HomeUpdatePictureFrameInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeUpdatePictureFrameInfoRsp.CmdId
 */
var HomeUpdatePictureFrameInfoRsp_CmdId;
(function (HomeUpdatePictureFrameInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdatePictureFrameInfoRsp_CmdId[HomeUpdatePictureFrameInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4641;
     */
    HomeUpdatePictureFrameInfoRsp_CmdId[HomeUpdatePictureFrameInfoRsp_CmdId["CMD_ID"] = 4641] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeUpdatePictureFrameInfoRsp_CmdId[HomeUpdatePictureFrameInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeUpdatePictureFrameInfoRsp_CmdId[HomeUpdatePictureFrameInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeUpdatePictureFrameInfoRsp_CmdId = exports.HomeUpdatePictureFrameInfoRsp_CmdId || (exports.HomeUpdatePictureFrameInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeRacingGallerySettleNotify.CmdId
 */
var HomeRacingGallerySettleNotify_CmdId;
(function (HomeRacingGallerySettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeRacingGallerySettleNotify_CmdId[HomeRacingGallerySettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4805;
     */
    HomeRacingGallerySettleNotify_CmdId[HomeRacingGallerySettleNotify_CmdId["CMD_ID"] = 4805] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeRacingGallerySettleNotify_CmdId[HomeRacingGallerySettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeRacingGallerySettleNotify_CmdId[HomeRacingGallerySettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeRacingGallerySettleNotify_CmdId = exports.HomeRacingGallerySettleNotify_CmdId || (exports.HomeRacingGallerySettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetGroupRecordReq.CmdId
 */
var HomeGetGroupRecordReq_CmdId;
(function (HomeGetGroupRecordReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetGroupRecordReq_CmdId[HomeGetGroupRecordReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4523;
     */
    HomeGetGroupRecordReq_CmdId[HomeGetGroupRecordReq_CmdId["CMD_ID"] = 4523] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetGroupRecordReq_CmdId[HomeGetGroupRecordReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetGroupRecordReq_CmdId[HomeGetGroupRecordReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetGroupRecordReq_CmdId[HomeGetGroupRecordReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetGroupRecordReq_CmdId = exports.HomeGetGroupRecordReq_CmdId || (exports.HomeGetGroupRecordReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetGroupRecordRsp.CmdId
 */
var HomeGetGroupRecordRsp_CmdId;
(function (HomeGetGroupRecordRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetGroupRecordRsp_CmdId[HomeGetGroupRecordRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4538;
     */
    HomeGetGroupRecordRsp_CmdId[HomeGetGroupRecordRsp_CmdId["CMD_ID"] = 4538] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetGroupRecordRsp_CmdId[HomeGetGroupRecordRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetGroupRecordRsp_CmdId[HomeGetGroupRecordRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGetGroupRecordRsp_CmdId = exports.HomeGetGroupRecordRsp_CmdId || (exports.HomeGetGroupRecordRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeClearGroupRecordReq.CmdId
 */
var HomeClearGroupRecordReq_CmdId;
(function (HomeClearGroupRecordReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeClearGroupRecordReq_CmdId[HomeClearGroupRecordReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4759;
     */
    HomeClearGroupRecordReq_CmdId[HomeClearGroupRecordReq_CmdId["CMD_ID"] = 4759] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeClearGroupRecordReq_CmdId[HomeClearGroupRecordReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeClearGroupRecordReq_CmdId[HomeClearGroupRecordReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeClearGroupRecordReq_CmdId[HomeClearGroupRecordReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeClearGroupRecordReq_CmdId = exports.HomeClearGroupRecordReq_CmdId || (exports.HomeClearGroupRecordReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeClearGroupRecordRsp.CmdId
 */
var HomeClearGroupRecordRsp_CmdId;
(function (HomeClearGroupRecordRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeClearGroupRecordRsp_CmdId[HomeClearGroupRecordRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4605;
     */
    HomeClearGroupRecordRsp_CmdId[HomeClearGroupRecordRsp_CmdId["CMD_ID"] = 4605] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeClearGroupRecordRsp_CmdId[HomeClearGroupRecordRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeClearGroupRecordRsp_CmdId[HomeClearGroupRecordRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeClearGroupRecordRsp_CmdId = exports.HomeClearGroupRecordRsp_CmdId || (exports.HomeClearGroupRecordRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeBalloonGallerySettleNotify.CmdId
 */
var HomeBalloonGallerySettleNotify_CmdId;
(function (HomeBalloonGallerySettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBalloonGallerySettleNotify_CmdId[HomeBalloonGallerySettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4811;
     */
    HomeBalloonGallerySettleNotify_CmdId[HomeBalloonGallerySettleNotify_CmdId["CMD_ID"] = 4811] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBalloonGallerySettleNotify_CmdId[HomeBalloonGallerySettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeBalloonGallerySettleNotify_CmdId[HomeBalloonGallerySettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeBalloonGallerySettleNotify_CmdId = exports.HomeBalloonGallerySettleNotify_CmdId || (exports.HomeBalloonGallerySettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeBalloonGalleryScoreNotify.CmdId
 */
var HomeBalloonGalleryScoreNotify_CmdId;
(function (HomeBalloonGalleryScoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBalloonGalleryScoreNotify_CmdId[HomeBalloonGalleryScoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4654;
     */
    HomeBalloonGalleryScoreNotify_CmdId[HomeBalloonGalleryScoreNotify_CmdId["CMD_ID"] = 4654] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBalloonGalleryScoreNotify_CmdId[HomeBalloonGalleryScoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeBalloonGalleryScoreNotify_CmdId[HomeBalloonGalleryScoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeBalloonGalleryScoreNotify_CmdId = exports.HomeBalloonGalleryScoreNotify_CmdId || (exports.HomeBalloonGalleryScoreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSeekFurnitureGalleryScoreNotify.CmdId
 */
var HomeSeekFurnitureGalleryScoreNotify_CmdId;
(function (HomeSeekFurnitureGalleryScoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSeekFurnitureGalleryScoreNotify_CmdId[HomeSeekFurnitureGalleryScoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4583;
     */
    HomeSeekFurnitureGalleryScoreNotify_CmdId[HomeSeekFurnitureGalleryScoreNotify_CmdId["CMD_ID"] = 4583] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSeekFurnitureGalleryScoreNotify_CmdId[HomeSeekFurnitureGalleryScoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSeekFurnitureGalleryScoreNotify_CmdId[HomeSeekFurnitureGalleryScoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSeekFurnitureGalleryScoreNotify_CmdId = exports.HomeSeekFurnitureGalleryScoreNotify_CmdId || (exports.HomeSeekFurnitureGalleryScoreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHomeExchangeWoodInfoReq.CmdId
 */
var GetHomeExchangeWoodInfoReq_CmdId;
(function (GetHomeExchangeWoodInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeExchangeWoodInfoReq_CmdId[GetHomeExchangeWoodInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4473;
     */
    GetHomeExchangeWoodInfoReq_CmdId[GetHomeExchangeWoodInfoReq_CmdId["CMD_ID"] = 4473] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeExchangeWoodInfoReq_CmdId[GetHomeExchangeWoodInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeExchangeWoodInfoReq_CmdId[GetHomeExchangeWoodInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeExchangeWoodInfoReq_CmdId[GetHomeExchangeWoodInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetHomeExchangeWoodInfoReq_CmdId = exports.GetHomeExchangeWoodInfoReq_CmdId || (exports.GetHomeExchangeWoodInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHomeExchangeWoodInfoRsp.CmdId
 */
var GetHomeExchangeWoodInfoRsp_CmdId;
(function (GetHomeExchangeWoodInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeExchangeWoodInfoRsp_CmdId[GetHomeExchangeWoodInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4659;
     */
    GetHomeExchangeWoodInfoRsp_CmdId[GetHomeExchangeWoodInfoRsp_CmdId["CMD_ID"] = 4659] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHomeExchangeWoodInfoRsp_CmdId[GetHomeExchangeWoodInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHomeExchangeWoodInfoRsp_CmdId[GetHomeExchangeWoodInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetHomeExchangeWoodInfoRsp_CmdId = exports.GetHomeExchangeWoodInfoRsp_CmdId || (exports.GetHomeExchangeWoodInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeExchangeWoodReq.CmdId
 */
var HomeExchangeWoodReq_CmdId;
(function (HomeExchangeWoodReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeExchangeWoodReq_CmdId[HomeExchangeWoodReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4576;
     */
    HomeExchangeWoodReq_CmdId[HomeExchangeWoodReq_CmdId["CMD_ID"] = 4576] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeExchangeWoodReq_CmdId[HomeExchangeWoodReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeExchangeWoodReq_CmdId[HomeExchangeWoodReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeExchangeWoodReq_CmdId[HomeExchangeWoodReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeExchangeWoodReq_CmdId = exports.HomeExchangeWoodReq_CmdId || (exports.HomeExchangeWoodReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeExchangeWoodRsp.CmdId
 */
var HomeExchangeWoodRsp_CmdId;
(function (HomeExchangeWoodRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeExchangeWoodRsp_CmdId[HomeExchangeWoodRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4622;
     */
    HomeExchangeWoodRsp_CmdId[HomeExchangeWoodRsp_CmdId["CMD_ID"] = 4622] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeExchangeWoodRsp_CmdId[HomeExchangeWoodRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeExchangeWoodRsp_CmdId[HomeExchangeWoodRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeExchangeWoodRsp_CmdId = exports.HomeExchangeWoodRsp_CmdId || (exports.HomeExchangeWoodRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetBlueprintSlotInfoReq.CmdId
 */
var HomeGetBlueprintSlotInfoReq_CmdId;
(function (HomeGetBlueprintSlotInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBlueprintSlotInfoReq_CmdId[HomeGetBlueprintSlotInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4584;
     */
    HomeGetBlueprintSlotInfoReq_CmdId[HomeGetBlueprintSlotInfoReq_CmdId["CMD_ID"] = 4584] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBlueprintSlotInfoReq_CmdId[HomeGetBlueprintSlotInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetBlueprintSlotInfoReq_CmdId[HomeGetBlueprintSlotInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetBlueprintSlotInfoReq_CmdId[HomeGetBlueprintSlotInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeGetBlueprintSlotInfoReq_CmdId = exports.HomeGetBlueprintSlotInfoReq_CmdId || (exports.HomeGetBlueprintSlotInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGetBlueprintSlotInfoRsp.CmdId
 */
var HomeGetBlueprintSlotInfoRsp_CmdId;
(function (HomeGetBlueprintSlotInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBlueprintSlotInfoRsp_CmdId[HomeGetBlueprintSlotInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4662;
     */
    HomeGetBlueprintSlotInfoRsp_CmdId[HomeGetBlueprintSlotInfoRsp_CmdId["CMD_ID"] = 4662] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGetBlueprintSlotInfoRsp_CmdId[HomeGetBlueprintSlotInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGetBlueprintSlotInfoRsp_CmdId[HomeGetBlueprintSlotInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGetBlueprintSlotInfoRsp_CmdId = exports.HomeGetBlueprintSlotInfoRsp_CmdId || (exports.HomeGetBlueprintSlotInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSetBlueprintSlotOptionReq.CmdId
 */
var HomeSetBlueprintSlotOptionReq_CmdId;
(function (HomeSetBlueprintSlotOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintSlotOptionReq_CmdId[HomeSetBlueprintSlotOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4798;
     */
    HomeSetBlueprintSlotOptionReq_CmdId[HomeSetBlueprintSlotOptionReq_CmdId["CMD_ID"] = 4798] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintSlotOptionReq_CmdId[HomeSetBlueprintSlotOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintSlotOptionReq_CmdId[HomeSetBlueprintSlotOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintSlotOptionReq_CmdId[HomeSetBlueprintSlotOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSetBlueprintSlotOptionReq_CmdId = exports.HomeSetBlueprintSlotOptionReq_CmdId || (exports.HomeSetBlueprintSlotOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSetBlueprintSlotOptionRsp.CmdId
 */
var HomeSetBlueprintSlotOptionRsp_CmdId;
(function (HomeSetBlueprintSlotOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintSlotOptionRsp_CmdId[HomeSetBlueprintSlotOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4786;
     */
    HomeSetBlueprintSlotOptionRsp_CmdId[HomeSetBlueprintSlotOptionRsp_CmdId["CMD_ID"] = 4786] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintSlotOptionRsp_CmdId[HomeSetBlueprintSlotOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintSlotOptionRsp_CmdId[HomeSetBlueprintSlotOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSetBlueprintSlotOptionRsp_CmdId = exports.HomeSetBlueprintSlotOptionRsp_CmdId || (exports.HomeSetBlueprintSlotOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSetBlueprintFriendOptionReq.CmdId
 */
var HomeSetBlueprintFriendOptionReq_CmdId;
(function (HomeSetBlueprintFriendOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintFriendOptionReq_CmdId[HomeSetBlueprintFriendOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4554;
     */
    HomeSetBlueprintFriendOptionReq_CmdId[HomeSetBlueprintFriendOptionReq_CmdId["CMD_ID"] = 4554] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintFriendOptionReq_CmdId[HomeSetBlueprintFriendOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintFriendOptionReq_CmdId[HomeSetBlueprintFriendOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintFriendOptionReq_CmdId[HomeSetBlueprintFriendOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSetBlueprintFriendOptionReq_CmdId = exports.HomeSetBlueprintFriendOptionReq_CmdId || (exports.HomeSetBlueprintFriendOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSetBlueprintFriendOptionRsp.CmdId
 */
var HomeSetBlueprintFriendOptionRsp_CmdId;
(function (HomeSetBlueprintFriendOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintFriendOptionRsp_CmdId[HomeSetBlueprintFriendOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4604;
     */
    HomeSetBlueprintFriendOptionRsp_CmdId[HomeSetBlueprintFriendOptionRsp_CmdId["CMD_ID"] = 4604] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSetBlueprintFriendOptionRsp_CmdId[HomeSetBlueprintFriendOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSetBlueprintFriendOptionRsp_CmdId[HomeSetBlueprintFriendOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSetBlueprintFriendOptionRsp_CmdId = exports.HomeSetBlueprintFriendOptionRsp_CmdId || (exports.HomeSetBlueprintFriendOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeBlueprintInfoNotify.CmdId
 */
var HomeBlueprintInfoNotify_CmdId;
(function (HomeBlueprintInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBlueprintInfoNotify_CmdId[HomeBlueprintInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4765;
     */
    HomeBlueprintInfoNotify_CmdId[HomeBlueprintInfoNotify_CmdId["CMD_ID"] = 4765] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeBlueprintInfoNotify_CmdId[HomeBlueprintInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeBlueprintInfoNotify_CmdId[HomeBlueprintInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeBlueprintInfoNotify_CmdId = exports.HomeBlueprintInfoNotify_CmdId || (exports.HomeBlueprintInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePreviewBlueprintReq.CmdId
 */
var HomePreviewBlueprintReq_CmdId;
(function (HomePreviewBlueprintReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreviewBlueprintReq_CmdId[HomePreviewBlueprintReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4478;
     */
    HomePreviewBlueprintReq_CmdId[HomePreviewBlueprintReq_CmdId["CMD_ID"] = 4478] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreviewBlueprintReq_CmdId[HomePreviewBlueprintReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePreviewBlueprintReq_CmdId[HomePreviewBlueprintReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePreviewBlueprintReq_CmdId[HomePreviewBlueprintReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomePreviewBlueprintReq_CmdId = exports.HomePreviewBlueprintReq_CmdId || (exports.HomePreviewBlueprintReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePreviewBlueprintRsp.CmdId
 */
var HomePreviewBlueprintRsp_CmdId;
(function (HomePreviewBlueprintRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreviewBlueprintRsp_CmdId[HomePreviewBlueprintRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4738;
     */
    HomePreviewBlueprintRsp_CmdId[HomePreviewBlueprintRsp_CmdId["CMD_ID"] = 4738] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomePreviewBlueprintRsp_CmdId[HomePreviewBlueprintRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomePreviewBlueprintRsp_CmdId[HomePreviewBlueprintRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomePreviewBlueprintRsp_CmdId = exports.HomePreviewBlueprintRsp_CmdId || (exports.HomePreviewBlueprintRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeCreateBlueprintReq.CmdId
 */
var HomeCreateBlueprintReq_CmdId;
(function (HomeCreateBlueprintReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCreateBlueprintReq_CmdId[HomeCreateBlueprintReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4619;
     */
    HomeCreateBlueprintReq_CmdId[HomeCreateBlueprintReq_CmdId["CMD_ID"] = 4619] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCreateBlueprintReq_CmdId[HomeCreateBlueprintReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeCreateBlueprintReq_CmdId[HomeCreateBlueprintReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeCreateBlueprintReq_CmdId[HomeCreateBlueprintReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeCreateBlueprintReq_CmdId = exports.HomeCreateBlueprintReq_CmdId || (exports.HomeCreateBlueprintReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeCreateBlueprintRsp.CmdId
 */
var HomeCreateBlueprintRsp_CmdId;
(function (HomeCreateBlueprintRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCreateBlueprintRsp_CmdId[HomeCreateBlueprintRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4606;
     */
    HomeCreateBlueprintRsp_CmdId[HomeCreateBlueprintRsp_CmdId["CMD_ID"] = 4606] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeCreateBlueprintRsp_CmdId[HomeCreateBlueprintRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeCreateBlueprintRsp_CmdId[HomeCreateBlueprintRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeCreateBlueprintRsp_CmdId = exports.HomeCreateBlueprintRsp_CmdId || (exports.HomeCreateBlueprintRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeDeleteBlueprintReq.CmdId
 */
var HomeDeleteBlueprintReq_CmdId;
(function (HomeDeleteBlueprintReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeDeleteBlueprintReq_CmdId[HomeDeleteBlueprintReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4502;
     */
    HomeDeleteBlueprintReq_CmdId[HomeDeleteBlueprintReq_CmdId["CMD_ID"] = 4502] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeDeleteBlueprintReq_CmdId[HomeDeleteBlueprintReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeDeleteBlueprintReq_CmdId[HomeDeleteBlueprintReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeDeleteBlueprintReq_CmdId[HomeDeleteBlueprintReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeDeleteBlueprintReq_CmdId = exports.HomeDeleteBlueprintReq_CmdId || (exports.HomeDeleteBlueprintReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeDeleteBlueprintRsp.CmdId
 */
var HomeDeleteBlueprintRsp_CmdId;
(function (HomeDeleteBlueprintRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeDeleteBlueprintRsp_CmdId[HomeDeleteBlueprintRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4586;
     */
    HomeDeleteBlueprintRsp_CmdId[HomeDeleteBlueprintRsp_CmdId["CMD_ID"] = 4586] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeDeleteBlueprintRsp_CmdId[HomeDeleteBlueprintRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeDeleteBlueprintRsp_CmdId[HomeDeleteBlueprintRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeDeleteBlueprintRsp_CmdId = exports.HomeDeleteBlueprintRsp_CmdId || (exports.HomeDeleteBlueprintRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSearchBlueprintReq.CmdId
 */
var HomeSearchBlueprintReq_CmdId;
(function (HomeSearchBlueprintReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSearchBlueprintReq_CmdId[HomeSearchBlueprintReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4889;
     */
    HomeSearchBlueprintReq_CmdId[HomeSearchBlueprintReq_CmdId["CMD_ID"] = 4889] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSearchBlueprintReq_CmdId[HomeSearchBlueprintReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSearchBlueprintReq_CmdId[HomeSearchBlueprintReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSearchBlueprintReq_CmdId[HomeSearchBlueprintReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSearchBlueprintReq_CmdId = exports.HomeSearchBlueprintReq_CmdId || (exports.HomeSearchBlueprintReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSearchBlueprintRsp.CmdId
 */
var HomeSearchBlueprintRsp_CmdId;
(function (HomeSearchBlueprintRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSearchBlueprintRsp_CmdId[HomeSearchBlueprintRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4593;
     */
    HomeSearchBlueprintRsp_CmdId[HomeSearchBlueprintRsp_CmdId["CMD_ID"] = 4593] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSearchBlueprintRsp_CmdId[HomeSearchBlueprintRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSearchBlueprintRsp_CmdId[HomeSearchBlueprintRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSearchBlueprintRsp_CmdId = exports.HomeSearchBlueprintRsp_CmdId || (exports.HomeSearchBlueprintRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSaveArrangementNoChangeReq.CmdId
 */
var HomeSaveArrangementNoChangeReq_CmdId;
(function (HomeSaveArrangementNoChangeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSaveArrangementNoChangeReq_CmdId[HomeSaveArrangementNoChangeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4704;
     */
    HomeSaveArrangementNoChangeReq_CmdId[HomeSaveArrangementNoChangeReq_CmdId["CMD_ID"] = 4704] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSaveArrangementNoChangeReq_CmdId[HomeSaveArrangementNoChangeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSaveArrangementNoChangeReq_CmdId[HomeSaveArrangementNoChangeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSaveArrangementNoChangeReq_CmdId[HomeSaveArrangementNoChangeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HomeSaveArrangementNoChangeReq_CmdId = exports.HomeSaveArrangementNoChangeReq_CmdId || (exports.HomeSaveArrangementNoChangeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeSaveArrangementNoChangeRsp.CmdId
 */
var HomeSaveArrangementNoChangeRsp_CmdId;
(function (HomeSaveArrangementNoChangeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSaveArrangementNoChangeRsp_CmdId[HomeSaveArrangementNoChangeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4668;
     */
    HomeSaveArrangementNoChangeRsp_CmdId[HomeSaveArrangementNoChangeRsp_CmdId["CMD_ID"] = 4668] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeSaveArrangementNoChangeRsp_CmdId[HomeSaveArrangementNoChangeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeSaveArrangementNoChangeRsp_CmdId[HomeSaveArrangementNoChangeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeSaveArrangementNoChangeRsp_CmdId = exports.HomeSaveArrangementNoChangeRsp_CmdId || (exports.HomeSaveArrangementNoChangeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomePlantFieldStatus
 */
var HomePlantFieldStatus;
(function (HomePlantFieldStatus) {
    /**
     * @generated from protobuf enum value: HOME_FIELD_STATUE_NONE = 0;
     */
    HomePlantFieldStatus[HomePlantFieldStatus["HOME_FIELD_STATUE_NONE"] = 0] = "HOME_FIELD_STATUE_NONE";
    /**
     * @generated from protobuf enum value: HOME_FIELD_STATUE_SEED = 1;
     */
    HomePlantFieldStatus[HomePlantFieldStatus["HOME_FIELD_STATUE_SEED"] = 1] = "HOME_FIELD_STATUE_SEED";
    /**
     * @generated from protobuf enum value: HOME_FIELD_STATUE_SPROUT = 2;
     */
    HomePlantFieldStatus[HomePlantFieldStatus["HOME_FIELD_STATUE_SPROUT"] = 2] = "HOME_FIELD_STATUE_SPROUT";
    /**
     * @generated from protobuf enum value: HOME_FIELD_STATUE_GATHER = 3;
     */
    HomePlantFieldStatus[HomePlantFieldStatus["HOME_FIELD_STATUE_GATHER"] = 3] = "HOME_FIELD_STATUE_GATHER";
})(HomePlantFieldStatus = exports.HomePlantFieldStatus || (exports.HomePlantFieldStatus = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyFurnitureData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeVerifyFurnitureData", [
            { no: 7, name: "type", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 type */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.type.push(reader.uint32());
                    else
                        message.type.push(reader.uint32());
                    break;
                case /* optional uint32 id */ 5:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 num */ 9:
                    message.num = reader.uint32();
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
        /* repeated uint32 type = 7; */
        if (message.type.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.type.length; i++)
                writer.uint32(message.type[i]);
            writer.join();
        }
        /* optional uint32 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.id);
        /* optional uint32 num = 9; */
        if (message.num !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.num);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeVerifyFurnitureData
 */
exports.HomeVerifyFurnitureData = new HomeVerifyFurnitureData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyBlockData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeVerifyBlockData", [
            { no: 10, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "furniture_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 block_id */ 10:
                    message.blockId = reader.uint32();
                    break;
                case /* optional uint32 furniture_count */ 9:
                    message.furnitureCount = reader.uint32();
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
        /* optional uint32 block_id = 10; */
        if (message.blockId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional uint32 furniture_count = 9; */
        if (message.furnitureCount !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.furnitureCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeVerifyBlockData
 */
exports.HomeVerifyBlockData = new HomeVerifyBlockData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifySceneData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeVerifySceneData", [
            { no: 6, name: "blocks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeVerifyBlockData },
            { no: 11, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_room", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { blocks: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeVerifyBlockData blocks */ 6:
                    message.blocks.push(exports.HomeVerifyBlockData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 module_id */ 11:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 version */ 14:
                    message.version = reader.uint32();
                    break;
                case /* optional uint32 is_room */ 2:
                    message.isRoom = reader.uint32();
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
        /* repeated com.midnights.game.HomeVerifyBlockData blocks = 6; */
        for (let i = 0; i < message.blocks.length; i++)
            exports.HomeVerifyBlockData.internalBinaryWrite(message.blocks[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 module_id = 11; */
        if (message.moduleId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 version = 14; */
        if (message.version !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.version);
        /* optional uint32 is_room = 2; */
        if (message.isRoom !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.isRoom);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeVerifySceneData
 */
exports.HomeVerifySceneData = new HomeVerifySceneData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeVerifyData", [
            { no: 7, name: "aid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "timestamp", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 5, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "arrangement_data", kind: "message", T: () => define_10.HomeSceneArrangementMuipData },
            { no: 3, name: "region", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "home_info", kind: "message", T: () => exports.HomeVerifySceneData },
            { no: 8, name: "lang", kind: "enum", opt: true, T: () => ["com.midnights.game.LanguageType", define_9.LanguageType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string aid */ 7:
                    message.aid = reader.string();
                    break;
                case /* optional fixed32 timestamp */ 15:
                    message.timestamp = reader.fixed32();
                    break;
                case /* optional uint32 uid */ 5:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.HomeSceneArrangementMuipData arrangement_data */ 9:
                    message.arrangementData = define_10.HomeSceneArrangementMuipData.internalBinaryRead(reader, reader.uint32(), options, message.arrangementData);
                    break;
                case /* optional string region */ 3:
                    message.region = reader.string();
                    break;
                case /* optional string token */ 1:
                    message.token = reader.string();
                    break;
                case /* optional com.midnights.game.HomeVerifySceneData home_info */ 6:
                    message.homeInfo = exports.HomeVerifySceneData.internalBinaryRead(reader, reader.uint32(), options, message.homeInfo);
                    break;
                case /* optional com.midnights.game.LanguageType lang */ 8:
                    message.lang = reader.int32();
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
        /* optional string aid = 7; */
        if (message.aid !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.aid);
        /* optional fixed32 timestamp = 15; */
        if (message.timestamp !== undefined)
            writer.tag(15, runtime_2.WireType.Bit32).fixed32(message.timestamp);
        /* optional uint32 uid = 5; */
        if (message.uid !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.HomeSceneArrangementMuipData arrangement_data = 9; */
        if (message.arrangementData)
            define_10.HomeSceneArrangementMuipData.internalBinaryWrite(message.arrangementData, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string region = 3; */
        if (message.region !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.region);
        /* optional string token = 1; */
        if (message.token !== undefined)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.token);
        /* optional com.midnights.game.HomeVerifySceneData home_info = 6; */
        if (message.homeInfo)
            exports.HomeVerifySceneData.internalBinaryWrite(message.homeInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.LanguageType lang = 8; */
        if (message.lang !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.lang);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeVerifyData
 */
exports.HomeVerifyData = new HomeVerifyData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TryEnterHomeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TryEnterHomeReq", [
            { no: 3, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_transfer_to_safe_point", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "target_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 3:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional bool is_transfer_to_safe_point */ 10:
                    message.isTransferToSafePoint = reader.bool();
                    break;
                case /* optional uint32 target_point */ 9:
                    message.targetPoint = reader.uint32();
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
        /* optional uint32 target_uid = 3; */
        if (message.targetUid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional bool is_transfer_to_safe_point = 10; */
        if (message.isTransferToSafePoint !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isTransferToSafePoint);
        /* optional uint32 target_point = 9; */
        if (message.targetPoint !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.targetPoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TryEnterHomeReq
 */
exports.TryEnterHomeReq = new TryEnterHomeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TryEnterHomeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TryEnterHomeRsp", [
            { no: 15, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 15:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 param_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 15; */
        if (message.targetUid !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 param_list = 10; */
        if (message.paramList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TryEnterHomeRsp
 */
exports.TryEnterHomeRsp = new TryEnterHomeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinHomeWorldFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.JoinHomeWorldFailNotify", [
            { no: 6, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 target_uid */ 6:
                    message.targetUid = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 6; */
        if (message.targetUid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.JoinHomeWorldFailNotify
 */
exports.JoinHomeWorldFailNotify = new JoinHomeWorldFailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockNotify", [
            { no: 3, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 end_time */ 3:
                    message.endTime = reader.uint32();
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
        /* optional uint32 end_time = 3; */
        if (message.endTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockNotify
 */
exports.HomeBlockNotify = new HomeBlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBasicInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBasicInfo", [
            { no: 10, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "cur_room_scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_in_edit_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "home_owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "exp", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "limited_shop_info", kind: "message", T: () => exports.HomeLimitedShopInfo },
            { no: 4, name: "owner_nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 10:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 cur_room_scene_id */ 13:
                    message.curRoomSceneId = reader.uint32();
                    break;
                case /* optional uint32 cur_module_id */ 9:
                    message.curModuleId = reader.uint32();
                    break;
                case /* optional bool is_in_edit_mode */ 5:
                    message.isInEditMode = reader.bool();
                    break;
                case /* optional uint32 home_owner_uid */ 3:
                    message.homeOwnerUid = reader.uint32();
                    break;
                case /* optional uint64 exp */ 14:
                    message.exp = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.HomeLimitedShopInfo limited_shop_info */ 15:
                    message.limitedShopInfo = exports.HomeLimitedShopInfo.internalBinaryRead(reader, reader.uint32(), options, message.limitedShopInfo);
                    break;
                case /* optional string owner_nick_name */ 4:
                    message.ownerNickName = reader.string();
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
        /* optional uint32 level = 10; */
        if (message.level !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 cur_room_scene_id = 13; */
        if (message.curRoomSceneId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.curRoomSceneId);
        /* optional uint32 cur_module_id = 9; */
        if (message.curModuleId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.curModuleId);
        /* optional bool is_in_edit_mode = 5; */
        if (message.isInEditMode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isInEditMode);
        /* optional uint32 home_owner_uid = 3; */
        if (message.homeOwnerUid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.homeOwnerUid);
        /* optional uint64 exp = 14; */
        if (message.exp !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.exp);
        /* optional com.midnights.game.HomeLimitedShopInfo limited_shop_info = 15; */
        if (message.limitedShopInfo)
            exports.HomeLimitedShopInfo.internalBinaryWrite(message.limitedShopInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string owner_nick_name = 4; */
        if (message.ownerNickName !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.ownerNickName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBasicInfo
 */
exports.HomeBasicInfo = new HomeBasicInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetBasicInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetBasicInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetBasicInfoReq
 */
exports.HomeGetBasicInfoReq = new HomeGetBasicInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBasicInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBasicInfoNotify", [
            { no: 15, name: "basic_info", kind: "message", T: () => exports.HomeBasicInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeBasicInfo basic_info */ 15:
                    message.basicInfo = exports.HomeBasicInfo.internalBinaryRead(reader, reader.uint32(), options, message.basicInfo);
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
        /* optional com.midnights.game.HomeBasicInfo basic_info = 15; */
        if (message.basicInfo)
            exports.HomeBasicInfo.internalBinaryWrite(message.basicInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBasicInfoNotify
 */
exports.HomeBasicInfoNotify = new HomeBasicInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeEditModeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeEditModeReq", [
            { no: 12, name: "is_enter_edit_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_enter_edit_mode */ 12:
                    message.isEnterEditMode = reader.bool();
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
        /* optional bool is_enter_edit_mode = 12; */
        if (message.isEnterEditMode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isEnterEditMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeEditModeReq
 */
exports.HomeChangeEditModeReq = new HomeChangeEditModeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeEditModeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeEditModeRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "is_enter_edit_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_enter_edit_mode */ 5:
                    message.isEnterEditMode = reader.bool();
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_enter_edit_mode = 5; */
        if (message.isEnterEditMode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isEnterEditMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeEditModeRsp
 */
exports.HomeChangeEditModeRsp = new HomeChangeEditModeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeModuleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeModuleReq", [
            { no: 5, name: "target_module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_module_id */ 5:
                    message.targetModuleId = reader.uint32();
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
        /* optional uint32 target_module_id = 5; */
        if (message.targetModuleId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.targetModuleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeModuleReq
 */
exports.HomeChangeModuleReq = new HomeChangeModuleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeModuleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeModuleRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "target_module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 target_module_id */ 2:
                    message.targetModuleId = reader.uint32();
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 target_module_id = 2; */
        if (message.targetModuleId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.targetModuleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeModuleRsp
 */
exports.HomeChangeModuleRsp = new HomeChangeModuleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFurnitureData", [
            { no: 6, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "parent_furniture_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "spawn_rot", kind: "message", T: () => define_8.Vector },
            { no: 8, name: "spawn_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 version */ 6:
                    message.version = reader.uint32();
                    break;
                case /* optional int32 parent_furniture_index */ 3:
                    message.parentFurnitureIndex = reader.int32();
                    break;
                case /* optional uint32 furniture_id */ 4:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional uint32 guid */ 9:
                    message.guid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_rot */ 10:
                    message.spawnRot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 8:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* optional uint32 version = 6; */
        if (message.version !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.version);
        /* optional int32 parent_furniture_index = 3; */
        if (message.parentFurnitureIndex !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.parentFurnitureIndex);
        /* optional uint32 furniture_id = 4; */
        if (message.furnitureId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional uint32 guid = 9; */
        if (message.guid !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional com.midnights.game.Vector spawn_rot = 10; */
        if (message.spawnRot)
            define_8.Vector.internalBinaryWrite(message.spawnRot, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector spawn_pos = 8; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFurnitureData
 */
exports.HomeFurnitureData = new HomeFurnitureData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureSuiteData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFurnitureSuiteData", [
            { no: 10, name: "is_allow_summon", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "suite_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "spawn_pos", kind: "message", T: () => define_8.Vector },
            { no: 13, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "included_furniture_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { includedFurnitureIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_allow_summon */ 10:
                    message.isAllowSummon = reader.bool();
                    break;
                case /* optional uint32 suite_id */ 6:
                    message.suiteId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 8:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* optional uint32 guid */ 13:
                    message.guid = reader.uint32();
                    break;
                case /* repeated int32 included_furniture_index_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.includedFurnitureIndexList.push(reader.int32());
                    else
                        message.includedFurnitureIndexList.push(reader.int32());
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
        /* optional bool is_allow_summon = 10; */
        if (message.isAllowSummon !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAllowSummon);
        /* optional uint32 suite_id = 6; */
        if (message.suiteId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.suiteId);
        /* optional com.midnights.game.Vector spawn_pos = 8; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 guid = 13; */
        if (message.guid !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.guid);
        /* repeated int32 included_furniture_index_list = 1; */
        if (message.includedFurnitureIndexList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.includedFurnitureIndexList.length; i++)
                writer.int32(message.includedFurnitureIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFurnitureSuiteData
 */
exports.HomeFurnitureSuiteData = new HomeFurnitureSuiteData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeNpcData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeNpcData", [
            { no: 14, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "spawn_pos", kind: "message", T: () => define_8.Vector },
            { no: 3, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "spawn_rot", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 14:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 15:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* optional uint32 costume_id */ 3:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_rot */ 13:
                    message.spawnRot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
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
        /* optional uint32 avatar_id = 14; */
        if (message.avatarId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional com.midnights.game.Vector spawn_pos = 15; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 costume_id = 3; */
        if (message.costumeId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional com.midnights.game.Vector spawn_rot = 13; */
        if (message.spawnRot)
            define_8.Vector.internalBinaryWrite(message.spawnRot, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeNpcData
 */
exports.HomeNpcData = new HomeNpcData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAnimalData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAnimalData", [
            { no: 10, name: "spawn_rot", kind: "message", T: () => define_8.Vector },
            { no: 5, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "spawn_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector spawn_rot */ 10:
                    message.spawnRot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
                    break;
                case /* optional uint32 furniture_id */ 5:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 6:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* optional com.midnights.game.Vector spawn_rot = 10; */
        if (message.spawnRot)
            define_8.Vector.internalBinaryWrite(message.spawnRot, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 furniture_id = 5; */
        if (message.furnitureId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional com.midnights.game.Vector spawn_pos = 6; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAnimalData
 */
exports.HomeAnimalData = new HomeAnimalData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeekendDjinnInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeekendDjinnInfo", [
            { no: 14, name: "rot", kind: "message", T: () => define_8.Vector },
            { no: 10, name: "pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 14:
                    message.rot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* optional com.midnights.game.Vector rot = 14; */
        if (message.rot)
            define_8.Vector.internalBinaryWrite(message.rot, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_8.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeekendDjinnInfo
 */
exports.WeekendDjinnInfo = new WeekendDjinnInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockDotPattern$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockDotPattern", [
            { no: 8, name: "width", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "height", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 width */ 8:
                    message.width = reader.uint32();
                    break;
                case /* optional uint32 height */ 11:
                    message.height = reader.uint32();
                    break;
                case /* optional bytes data */ 9:
                    message.data = reader.bytes();
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
        /* optional uint32 width = 8; */
        if (message.width !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.width);
        /* optional uint32 height = 11; */
        if (message.height !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.height);
        /* optional bytes data = 9; */
        if (message.data !== undefined)
            writer.tag(9, runtime_2.WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockDotPattern
 */
exports.HomeBlockDotPattern = new HomeBlockDotPattern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockSubFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockSubFieldData", [
            { no: 3, name: "rot", kind: "message", T: () => define_8.Vector },
            { no: 1, name: "pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                    message.rot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* optional com.midnights.game.Vector rot = 3; */
        if (message.rot)
            define_8.Vector.internalBinaryWrite(message.rot, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_8.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockSubFieldData
 */
exports.HomeBlockSubFieldData = new HomeBlockSubFieldData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockFieldData", [
            { no: 15, name: "rot", kind: "message", T: () => define_8.Vector },
            { no: 4, name: "pos", kind: "message", T: () => define_8.Vector },
            { no: 9, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "sub_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBlockSubFieldData }
        ]);
    }
    create(value) {
        const message = { subFieldList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 15:
                    message.rot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 4:
                    message.pos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 guid */ 9:
                    message.guid = reader.uint32();
                    break;
                case /* optional uint32 furniture_id */ 1:
                    message.furnitureId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HomeBlockSubFieldData sub_field_list */ 7:
                    message.subFieldList.push(exports.HomeBlockSubFieldData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional com.midnights.game.Vector rot = 15; */
        if (message.rot)
            define_8.Vector.internalBinaryWrite(message.rot, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 4; */
        if (message.pos)
            define_8.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 guid = 9; */
        if (message.guid !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional uint32 furniture_id = 1; */
        if (message.furnitureId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* repeated com.midnights.game.HomeBlockSubFieldData sub_field_list = 7; */
        for (let i = 0; i < message.subFieldList.length; i++)
            exports.HomeBlockSubFieldData.internalBinaryWrite(message.subFieldList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockFieldData
 */
exports.HomeBlockFieldData = new HomeBlockFieldData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeTransferData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeTransferData", [
            { no: 15, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "spawn_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.Vector spawn_pos */ 7:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* optional uint32 guid = 15; */
        if (message.guid !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional com.midnights.game.Vector spawn_pos = 7; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeTransferData
 */
exports.HomeTransferData = new HomeTransferData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureGroupData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFurnitureGroupData", [
            { no: 8, name: "group_furniture_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "virtual_furniure_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureData }
        ]);
    }
    create(value) {
        const message = { virtualFurniureList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_furniture_index */ 8:
                    message.groupFurnitureIndex = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HomeFurnitureData virtual_furniure_list */ 3:
                    message.virtualFurniureList.push(exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 group_furniture_index = 8; */
        if (message.groupFurnitureIndex !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.groupFurnitureIndex);
        /* repeated com.midnights.game.HomeFurnitureData virtual_furniure_list = 3; */
        for (let i = 0; i < message.virtualFurniureList.length; i++)
            exports.HomeFurnitureData.internalBinaryWrite(message.virtualFurniureList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFurnitureGroupData
 */
exports.HomeFurnitureGroupData = new HomeFurnitureGroupData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureCustomSuiteData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFurnitureCustomSuiteData", [
            { no: 11, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "spawn_pos", kind: "message", T: () => define_8.Vector },
            { no: 12, name: "included_furniture_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { includedFurnitureIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 guid */ 11:
                    message.guid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 14:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* repeated int32 included_furniture_index_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.includedFurnitureIndexList.push(reader.int32());
                    else
                        message.includedFurnitureIndexList.push(reader.int32());
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
        /* optional uint32 guid = 11; */
        if (message.guid !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional com.midnights.game.Vector spawn_pos = 14; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated int32 included_furniture_index_list = 12; */
        if (message.includedFurnitureIndexList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.includedFurnitureIndexList.length; i++)
                writer.int32(message.includedFurnitureIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFurnitureCustomSuiteData
 */
exports.HomeFurnitureCustomSuiteData = new HomeFurnitureCustomSuiteData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockArrangementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlockArrangementInfo", [
            { no: 1, name: "is_unlocked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "comfort_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "deploy_animal_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeAnimalData },
            { no: 5, name: "furniture_group_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureGroupData },
            { no: 13, name: "weekend_djinn_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WeekendDjinnInfo },
            { no: 15, name: "furniture_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureSuiteData },
            { no: 3, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBlockFieldData },
            { no: 11, name: "deploy_npc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeNpcData },
            { no: 7, name: "dot_pattern_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBlockDotPattern },
            { no: 9, name: "persistent_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureData },
            { no: 12, name: "deploy_furniure_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureData },
            { no: 6, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "furniture_custom_suite_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureCustomSuiteData }
        ]);
    }
    create(value) {
        const message = { deployAnimalList: [], furnitureGroupList: [], weekendDjinnInfoList: [], furnitureSuiteList: [], fieldList: [], deployNpcList: [], dotPatternList: [], persistentFurnitureList: [], deployFurniureList: [], furnitureCustomSuiteList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_unlocked */ 1:
                    message.isUnlocked = reader.bool();
                    break;
                case /* optional uint32 comfort_value */ 2:
                    message.comfortValue = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HomeAnimalData deploy_animal_list */ 4:
                    message.deployAnimalList.push(exports.HomeAnimalData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeFurnitureGroupData furniture_group_list */ 5:
                    message.furnitureGroupList.push(exports.HomeFurnitureGroupData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.WeekendDjinnInfo weekend_djinn_info_list */ 13:
                    message.weekendDjinnInfoList.push(exports.WeekendDjinnInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeFurnitureSuiteData furniture_suite_list */ 15:
                    message.furnitureSuiteList.push(exports.HomeFurnitureSuiteData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeBlockFieldData field_list */ 3:
                    message.fieldList.push(exports.HomeBlockFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeNpcData deploy_npc_list */ 11:
                    message.deployNpcList.push(exports.HomeNpcData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeBlockDotPattern dot_pattern_list */ 7:
                    message.dotPatternList.push(exports.HomeBlockDotPattern.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeFurnitureData persistent_furniture_list */ 9:
                    message.persistentFurnitureList.push(exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeFurnitureData deploy_furniure_list */ 12:
                    message.deployFurniureList.push(exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 block_id */ 6:
                    message.blockId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HomeFurnitureCustomSuiteData furniture_custom_suite_list */ 14:
                    message.furnitureCustomSuiteList.push(exports.HomeFurnitureCustomSuiteData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_unlocked = 1; */
        if (message.isUnlocked !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isUnlocked);
        /* optional uint32 comfort_value = 2; */
        if (message.comfortValue !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.comfortValue);
        /* repeated com.midnights.game.HomeAnimalData deploy_animal_list = 4; */
        for (let i = 0; i < message.deployAnimalList.length; i++)
            exports.HomeAnimalData.internalBinaryWrite(message.deployAnimalList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureGroupData furniture_group_list = 5; */
        for (let i = 0; i < message.furnitureGroupList.length; i++)
            exports.HomeFurnitureGroupData.internalBinaryWrite(message.furnitureGroupList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.WeekendDjinnInfo weekend_djinn_info_list = 13; */
        for (let i = 0; i < message.weekendDjinnInfoList.length; i++)
            exports.WeekendDjinnInfo.internalBinaryWrite(message.weekendDjinnInfoList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureSuiteData furniture_suite_list = 15; */
        for (let i = 0; i < message.furnitureSuiteList.length; i++)
            exports.HomeFurnitureSuiteData.internalBinaryWrite(message.furnitureSuiteList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeBlockFieldData field_list = 3; */
        for (let i = 0; i < message.fieldList.length; i++)
            exports.HomeBlockFieldData.internalBinaryWrite(message.fieldList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeNpcData deploy_npc_list = 11; */
        for (let i = 0; i < message.deployNpcList.length; i++)
            exports.HomeNpcData.internalBinaryWrite(message.deployNpcList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeBlockDotPattern dot_pattern_list = 7; */
        for (let i = 0; i < message.dotPatternList.length; i++)
            exports.HomeBlockDotPattern.internalBinaryWrite(message.dotPatternList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureData persistent_furniture_list = 9; */
        for (let i = 0; i < message.persistentFurnitureList.length; i++)
            exports.HomeFurnitureData.internalBinaryWrite(message.persistentFurnitureList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureData deploy_furniure_list = 12; */
        for (let i = 0; i < message.deployFurniureList.length; i++)
            exports.HomeFurnitureData.internalBinaryWrite(message.deployFurniureList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 block_id = 6; */
        if (message.blockId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.blockId);
        /* repeated com.midnights.game.HomeFurnitureCustomSuiteData furniture_custom_suite_list = 14; */
        for (let i = 0; i < message.furnitureCustomSuiteList.length; i++)
            exports.HomeFurnitureCustomSuiteData.internalBinaryWrite(message.furnitureCustomSuiteList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlockArrangementInfo
 */
exports.HomeBlockArrangementInfo = new HomeBlockArrangementInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneArrangementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneArrangementInfo", [
            { no: 4, name: "born_rot", kind: "message", T: () => define_8.Vector },
            { no: 1, name: "born_pos", kind: "message", T: () => define_8.Vector },
            { no: 11, name: "stair_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureData },
            { no: 13, name: "door_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFurnitureData },
            { no: 10, name: "is_set_born_pos", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "block_arrangement_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBlockArrangementInfo },
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "bgm_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "djinn_pos", kind: "message", T: () => define_8.Vector },
            { no: 14, name: "main_house", kind: "message", T: () => exports.HomeFurnitureData },
            { no: 7, name: "comfort_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "tmp_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stairList: [], doorList: [], blockArrangementInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector born_rot */ 4:
                    message.bornRot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornRot);
                    break;
                case /* optional com.midnights.game.Vector born_pos */ 1:
                    message.bornPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* repeated com.midnights.game.HomeFurnitureData stair_list */ 11:
                    message.stairList.push(exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.HomeFurnitureData door_list */ 13:
                    message.doorList.push(exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_set_born_pos */ 10:
                    message.isSetBornPos = reader.bool();
                    break;
                case /* repeated com.midnights.game.HomeBlockArrangementInfo block_arrangement_info_list */ 8:
                    message.blockArrangementInfoList.push(exports.HomeBlockArrangementInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 bgm_id */ 12:
                    message.bgmId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector djinn_pos */ 9:
                    message.djinnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnPos);
                    break;
                case /* optional com.midnights.game.HomeFurnitureData main_house */ 14:
                    message.mainHouse = exports.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options, message.mainHouse);
                    break;
                case /* optional uint32 comfort_value */ 7:
                    message.comfortValue = reader.uint32();
                    break;
                case /* optional uint32 tmp_version */ 5:
                    message.tmpVersion = reader.uint32();
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
        /* optional com.midnights.game.Vector born_rot = 4; */
        if (message.bornRot)
            define_8.Vector.internalBinaryWrite(message.bornRot, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector born_pos = 1; */
        if (message.bornPos)
            define_8.Vector.internalBinaryWrite(message.bornPos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureData stair_list = 11; */
        for (let i = 0; i < message.stairList.length; i++)
            exports.HomeFurnitureData.internalBinaryWrite(message.stairList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeFurnitureData door_list = 13; */
        for (let i = 0; i < message.doorList.length; i++)
            exports.HomeFurnitureData.internalBinaryWrite(message.doorList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_set_born_pos = 10; */
        if (message.isSetBornPos !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isSetBornPos);
        /* repeated com.midnights.game.HomeBlockArrangementInfo block_arrangement_info_list = 8; */
        for (let i = 0; i < message.blockArrangementInfoList.length; i++)
            exports.HomeBlockArrangementInfo.internalBinaryWrite(message.blockArrangementInfoList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 bgm_id = 12; */
        if (message.bgmId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.bgmId);
        /* optional com.midnights.game.Vector djinn_pos = 9; */
        if (message.djinnPos)
            define_8.Vector.internalBinaryWrite(message.djinnPos, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.HomeFurnitureData main_house = 14; */
        if (message.mainHouse)
            exports.HomeFurnitureData.internalBinaryWrite(message.mainHouse, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 comfort_value = 7; */
        if (message.comfortValue !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.comfortValue);
        /* optional uint32 tmp_version = 5; */
        if (message.tmpVersion !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.tmpVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneArrangementInfo
 */
exports.HomeSceneArrangementInfo = new HomeSceneArrangementInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetArrangementInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetArrangementInfoReq", [
            { no: 13, name: "scene_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 scene_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneIdList.push(reader.uint32());
                    else
                        message.sceneIdList.push(reader.uint32());
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
        /* repeated uint32 scene_id_list = 13; */
        if (message.sceneIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneIdList.length; i++)
                writer.uint32(message.sceneIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetArrangementInfoReq
 */
exports.HomeGetArrangementInfoReq = new HomeGetArrangementInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetArrangementInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetArrangementInfoRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "scene_arrangement_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeSceneArrangementInfo }
        ]);
    }
    create(value) {
        const message = { sceneArrangementInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info_list */ 14:
                    message.sceneArrangementInfoList.push(exports.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info_list = 14; */
        for (let i = 0; i < message.sceneArrangementInfoList.length; i++)
            exports.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfoList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetArrangementInfoRsp
 */
exports.HomeGetArrangementInfoRsp = new HomeGetArrangementInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateArrangementInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateArrangementInfoReq", [
            { no: 6, name: "scene_arrangement_info", kind: "message", T: () => exports.HomeSceneArrangementInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info */ 6:
                    message.sceneArrangementInfo = exports.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
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
        /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info = 6; */
        if (message.sceneArrangementInfo)
            exports.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateArrangementInfoReq
 */
exports.HomeUpdateArrangementInfoReq = new HomeUpdateArrangementInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateArrangementInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateArrangementInfoRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateArrangementInfoRsp
 */
exports.HomeUpdateArrangementInfoRsp = new HomeUpdateArrangementInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerHomeCompInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerHomeCompInfo", [
            { no: 4, name: "unlocked_module_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "seen_module_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "levelup_reward_got_level_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "friend_enter_home_option", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendEnterHomeOption", define_7.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] }
        ]);
    }
    create(value) {
        const message = { unlockedModuleIdList: [], seenModuleIdList: [], levelupRewardGotLevelList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 unlocked_module_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockedModuleIdList.push(reader.uint32());
                    else
                        message.unlockedModuleIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 seen_module_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seenModuleIdList.push(reader.uint32());
                    else
                        message.seenModuleIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 levelup_reward_got_level_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelupRewardGotLevelList.push(reader.uint32());
                    else
                        message.levelupRewardGotLevelList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option */ 8:
                    message.friendEnterHomeOption = reader.int32();
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
        /* repeated uint32 unlocked_module_id_list = 4; */
        if (message.unlockedModuleIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockedModuleIdList.length; i++)
                writer.uint32(message.unlockedModuleIdList[i]);
            writer.join();
        }
        /* repeated uint32 seen_module_id_list = 2; */
        if (message.seenModuleIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seenModuleIdList.length; i++)
                writer.uint32(message.seenModuleIdList[i]);
            writer.join();
        }
        /* repeated uint32 levelup_reward_got_level_list = 7; */
        if (message.levelupRewardGotLevelList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.levelupRewardGotLevelList.length; i++)
                writer.uint32(message.levelupRewardGotLevelList[i]);
            writer.join();
        }
        /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option = 8; */
        if (message.friendEnterHomeOption !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.friendEnterHomeOption);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerHomeCompInfo
 */
exports.PlayerHomeCompInfo = new PlayerHomeCompInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerHomeCompInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerHomeCompInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerHomeCompInfoReq
 */
exports.GetPlayerHomeCompInfoReq = new GetPlayerHomeCompInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerHomeCompInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerHomeCompInfoNotify", [
            { no: 4, name: "comp_info", kind: "message", T: () => exports.PlayerHomeCompInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.PlayerHomeCompInfo comp_info */ 4:
                    message.compInfo = exports.PlayerHomeCompInfo.internalBinaryRead(reader, reader.uint32(), options, message.compInfo);
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
        /* optional com.midnights.game.PlayerHomeCompInfo comp_info = 4; */
        if (message.compInfo)
            exports.PlayerHomeCompInfo.internalBinaryWrite(message.compInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerHomeCompInfoNotify
 */
exports.PlayerHomeCompInfoNotify = new PlayerHomeCompInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendEnterHomeOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetFriendEnterHomeOptionReq", [
            { no: 7, name: "option", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendEnterHomeOption", define_7.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FriendEnterHomeOption option */ 7:
                    message.option = reader.int32();
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
        /* optional com.midnights.game.FriendEnterHomeOption option = 7; */
        if (message.option !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.option);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetFriendEnterHomeOptionReq
 */
exports.SetFriendEnterHomeOptionReq = new SetFriendEnterHomeOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendEnterHomeOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetFriendEnterHomeOptionRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetFriendEnterHomeOptionRsp
 */
exports.SetFriendEnterHomeOptionRsp = new SetFriendEnterHomeOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterHomeNotify", [
            { no: 9, name: "src_player_info", kind: "message", T: () => define_6.OnlinePlayerInfo },
            { no: 10, name: "src_app_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.OnlinePlayerInfo src_player_info */ 9:
                    message.srcPlayerInfo = define_6.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
                    break;
                case /* optional uint32 src_app_id */ 10:
                    message.srcAppId = reader.uint32();
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
        /* optional com.midnights.game.OnlinePlayerInfo src_player_info = 9; */
        if (message.srcPlayerInfo)
            define_6.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 src_app_id = 10; */
        if (message.srcAppId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.srcAppId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterHomeNotify
 */
exports.PlayerApplyEnterHomeNotify = new PlayerApplyEnterHomeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterHomeResultReq", [
            { no: 14, name: "apply_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 apply_uid */ 14:
                    message.applyUid = reader.uint32();
                    break;
                case /* optional bool is_agreed */ 10:
                    message.isAgreed = reader.bool();
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
        /* optional uint32 apply_uid = 14; */
        if (message.applyUid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.applyUid);
        /* optional bool is_agreed = 10; */
        if (message.isAgreed !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterHomeResultReq
 */
exports.PlayerApplyEnterHomeResultReq = new PlayerApplyEnterHomeResultReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterHomeResultRsp", [
            { no: 2, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "apply_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_agreed */ 2:
                    message.isAgreed = reader.bool();
                    break;
                case /* optional uint32 apply_uid */ 11:
                    message.applyUid = reader.uint32();
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 param */ 10:
                    message.param = reader.uint32();
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
        /* optional bool is_agreed = 2; */
        if (message.isAgreed !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isAgreed);
        /* optional uint32 apply_uid = 11; */
        if (message.applyUid !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.applyUid);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 param = 10; */
        if (message.param !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterHomeResultRsp
 */
exports.PlayerApplyEnterHomeResultRsp = new PlayerApplyEnterHomeResultRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterHomeResultNotify", [
            { no: 7, name: "target_nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerApplyEnterHomeResultNotify.Reason", PlayerApplyEnterHomeResultNotify_Reason] },
            { no: 12, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string target_nickname */ 7:
                    message.targetNickname = reader.string();
                    break;
                case /* optional com.midnights.game.PlayerApplyEnterHomeResultNotify.Reason reason */ 5:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 target_uid */ 12:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional bool is_agreed */ 9:
                    message.isAgreed = reader.bool();
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
        /* optional string target_nickname = 7; */
        if (message.targetNickname !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.targetNickname);
        /* optional com.midnights.game.PlayerApplyEnterHomeResultNotify.Reason reason = 5; */
        if (message.reason !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.reason);
        /* optional uint32 target_uid = 12; */
        if (message.targetUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional bool is_agreed = 9; */
        if (message.isAgreed !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterHomeResultNotify
 */
exports.PlayerApplyEnterHomeResultNotify = new PlayerApplyEnterHomeResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneJumpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneJumpReq", [
            { no: 9, name: "is_enter_room_scene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_enter_room_scene */ 9:
                    message.isEnterRoomScene = reader.bool();
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
        /* optional bool is_enter_room_scene = 9; */
        if (message.isEnterRoomScene !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isEnterRoomScene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneJumpReq
 */
exports.HomeSceneJumpReq = new HomeSceneJumpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneJumpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneJumpRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_enter_room_scene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_enter_room_scene */ 8:
                    message.isEnterRoomScene = reader.bool();
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
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_enter_room_scene = 8; */
        if (message.isEnterRoomScene !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isEnterRoomScene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneJumpRsp
 */
exports.HomeSceneJumpRsp = new HomeSceneJumpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChooseModuleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChooseModuleReq", [
            { no: 9, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 module_id */ 9:
                    message.moduleId = reader.uint32();
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
        /* optional uint32 module_id = 9; */
        if (message.moduleId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.moduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChooseModuleReq
 */
exports.HomeChooseModuleReq = new HomeChooseModuleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChooseModuleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChooseModuleRsp", [
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 module_id */ 8:
                    message.moduleId = reader.uint32();
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
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 module_id = 8; */
        if (message.moduleId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.moduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChooseModuleRsp
 */
exports.HomeChooseModuleRsp = new HomeChooseModuleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeModuleUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeModuleUnlockNotify", [
            { no: 8, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 module_id */ 8:
                    message.moduleId = reader.uint32();
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
        /* optional uint32 module_id = 8; */
        if (message.moduleId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.moduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeModuleUnlockNotify
 */
exports.HomeModuleUnlockNotify = new HomeModuleUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetOnlineStatusReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetOnlineStatusReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetOnlineStatusReq
 */
exports.HomeGetOnlineStatusReq = new HomeGetOnlineStatusReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetOnlineStatusRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetOnlineStatusRsp", [
            { no: 13, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_6.OnlinePlayerInfo },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { playerInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.OnlinePlayerInfo player_info_list */ 13:
                    message.playerInfoList.push(define_6.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.OnlinePlayerInfo player_info_list = 13; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            define_6.OnlinePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetOnlineStatusRsp
 */
exports.HomeGetOnlineStatusRsp = new HomeGetOnlineStatusRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeKickPlayerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeKickPlayerReq", [
            { no: 12, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_kick_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_kick_all */ 13:
                    message.isKickAll = reader.bool();
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
        /* optional uint32 target_uid = 12; */
        if (message.targetUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional bool is_kick_all = 13; */
        if (message.isKickAll !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isKickAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeKickPlayerReq
 */
exports.HomeKickPlayerReq = new HomeKickPlayerReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeKickPlayerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeKickPlayerRsp", [
            { no: 4, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "is_kick_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_kick_all */ 10:
                    message.isKickAll = reader.bool();
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
        /* optional uint32 target_uid = 4; */
        if (message.targetUid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_kick_all = 10; */
        if (message.isKickAll !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isKickAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeKickPlayerRsp
 */
exports.HomeKickPlayerRsp = new HomeKickPlayerRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeModuleSeenReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeModuleSeenReq", [
            { no: 5, name: "seen_module_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { seenModuleIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 seen_module_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seenModuleIdList.push(reader.uint32());
                    else
                        message.seenModuleIdList.push(reader.uint32());
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
        /* repeated uint32 seen_module_id_list = 5; */
        if (message.seenModuleIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seenModuleIdList.length; i++)
                writer.uint32(message.seenModuleIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeModuleSeenReq
 */
exports.HomeModuleSeenReq = new HomeModuleSeenReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeModuleSeenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeModuleSeenRsp", [
            { no: 13, name: "seen_module_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { seenModuleIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 seen_module_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seenModuleIdList.push(reader.uint32());
                    else
                        message.seenModuleIdList.push(reader.uint32());
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 seen_module_id_list = 13; */
        if (message.seenModuleIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seenModuleIdList.length; i++)
                writer.uint32(message.seenModuleIdList[i]);
            writer.join();
        }
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeModuleSeenRsp
 */
exports.HomeModuleSeenRsp = new HomeModuleSeenRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockedFurnitureFormulaDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockedFurnitureFormulaDataNotify", [
            { no: 15, name: "furniture_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { furnitureIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 furniture_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.furnitureIdList.push(reader.uint32());
                    else
                        message.furnitureIdList.push(reader.uint32());
                    break;
                case /* optional bool is_all */ 11:
                    message.isAll = reader.bool();
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
        /* repeated uint32 furniture_id_list = 15; */
        if (message.furnitureIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.furnitureIdList.length; i++)
                writer.uint32(message.furnitureIdList[i]);
            writer.join();
        }
        /* optional bool is_all = 11; */
        if (message.isAll !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockedFurnitureFormulaDataNotify
 */
exports.UnlockedFurnitureFormulaDataNotify = new UnlockedFurnitureFormulaDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockedFurnitureSuiteDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockedFurnitureSuiteDataNotify", [
            { no: 10, name: "is_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "furniture_suite_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { furnitureSuiteIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_all */ 10:
                    message.isAll = reader.bool();
                    break;
                case /* repeated uint32 furniture_suite_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.furnitureSuiteIdList.push(reader.uint32());
                    else
                        message.furnitureSuiteIdList.push(reader.uint32());
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
        /* optional bool is_all = 10; */
        if (message.isAll !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAll);
        /* repeated uint32 furniture_suite_id_list = 5; */
        if (message.furnitureSuiteIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.furnitureSuiteIdList.length; i++)
                writer.uint32(message.furnitureSuiteIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockedFurnitureSuiteDataNotify
 */
exports.UnlockedFurnitureSuiteDataNotify = new UnlockedFurnitureSuiteDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeLevelUpRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHomeLevelUpRewardReq", [
            { no: 15, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 15:
                    message.level = reader.uint32();
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
        /* optional uint32 level = 15; */
        if (message.level !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHomeLevelUpRewardReq
 */
exports.GetHomeLevelUpRewardReq = new GetHomeLevelUpRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeLevelUpRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHomeLevelUpRewardRsp", [
            { no: 1, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 level */ 1:
                    message.level = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 1; */
        if (message.level !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.level);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHomeLevelUpRewardRsp
 */
exports.GetHomeLevelUpRewardRsp = new GetHomeLevelUpRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFurnitureCurModuleArrangeCountReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetFurnitureCurModuleArrangeCountReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetFurnitureCurModuleArrangeCountReq
 */
exports.GetFurnitureCurModuleArrangeCountReq = new GetFurnitureCurModuleArrangeCountReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureCurModuleArrangeCountNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureCurModuleArrangeCountNotify", [
            { no: 13, name: "furniture_arrange_count_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_5.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { furnitureArrangeCountList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.Uint32Pair furniture_arrange_count_list */ 13:
                    message.furnitureArrangeCountList.push(define_5.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.Uint32Pair furniture_arrange_count_list = 13; */
        for (let i = 0; i < message.furnitureArrangeCountList.length; i++)
            define_5.Uint32Pair.internalBinaryWrite(message.furnitureArrangeCountList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureCurModuleArrangeCountNotify
 */
exports.FurnitureCurModuleArrangeCountNotify = new FurnitureCurModuleArrangeCountNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeModuleComfortInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeModuleComfortInfo", [
            { no: 13, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "room_scene_comfort_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "world_scene_block_comfort_value_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { worldSceneBlockComfortValueList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 module_id */ 13:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 room_scene_comfort_value */ 9:
                    message.roomSceneComfortValue = reader.uint32();
                    break;
                case /* repeated uint32 world_scene_block_comfort_value_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.worldSceneBlockComfortValueList.push(reader.uint32());
                    else
                        message.worldSceneBlockComfortValueList.push(reader.uint32());
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
        /* optional uint32 module_id = 13; */
        if (message.moduleId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 room_scene_comfort_value = 9; */
        if (message.roomSceneComfortValue !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.roomSceneComfortValue);
        /* repeated uint32 world_scene_block_comfort_value_list = 3; */
        if (message.worldSceneBlockComfortValueList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.worldSceneBlockComfortValueList.length; i++)
                writer.uint32(message.worldSceneBlockComfortValueList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeModuleComfortInfo
 */
exports.HomeModuleComfortInfo = new HomeModuleComfortInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeComfortInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeComfortInfoNotify", [
            { no: 6, name: "module_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeModuleComfortInfo }
        ]);
    }
    create(value) {
        const message = { moduleInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeModuleComfortInfo module_info_list */ 6:
                    message.moduleInfoList.push(exports.HomeModuleComfortInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeModuleComfortInfo module_info_list = 6; */
        for (let i = 0; i < message.moduleInfoList.length; i++)
            exports.HomeModuleComfortInfo.internalBinaryWrite(message.moduleInfoList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeComfortInfoNotify
 */
exports.HomeComfortInfoNotify = new HomeComfortInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitFromHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerQuitFromHomeNotify", [
            { no: 6, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerQuitFromHomeNotify.QuitReason", PlayerQuitFromHomeNotify_QuitReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.PlayerQuitFromHomeNotify.QuitReason reason */ 6:
                    message.reason = reader.int32();
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
        /* optional com.midnights.game.PlayerQuitFromHomeNotify.QuitReason reason = 6; */
        if (message.reason !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerQuitFromHomeNotify
 */
exports.PlayerQuitFromHomeNotify = new PlayerQuitFromHomeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OtherPlayerEnterHomeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OtherPlayerEnterHomeNotify", [
            { no: 7, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.OtherPlayerEnterHomeNotify.Reason", OtherPlayerEnterHomeNotify_Reason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string nickname */ 7:
                    message.nickname = reader.string();
                    break;
                case /* optional com.midnights.game.OtherPlayerEnterHomeNotify.Reason reason */ 3:
                    message.reason = reader.int32();
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
        /* optional string nickname = 7; */
        if (message.nickname !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* optional com.midnights.game.OtherPlayerEnterHomeNotify.Reason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OtherPlayerEnterHomeNotify
 */
exports.OtherPlayerEnterHomeNotify = new OtherPlayerEnterHomeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePriorCheckNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePriorCheckNotify", [
            { no: 7, name: "end_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 end_time */ 7:
                    message.endTime = reader.fixed32();
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
        /* optional fixed32 end_time = 7; */
        if (message.endTime !== undefined)
            writer.tag(7, runtime_2.WireType.Bit32).fixed32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePriorCheckNotify
 */
exports.HomePriorCheckNotify = new HomePriorCheckNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointSceneData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeMarkPointSceneData", [
            { no: 6, name: "furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_4.HomeMarkPointFurnitureData },
            { no: 4, name: "teapot_spirit_pos", kind: "message", T: () => define_8.Vector },
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "safe_point_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = { furnitureList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeMarkPointFurnitureData furniture_list */ 6:
                    message.furnitureList.push(define_4.HomeMarkPointFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.Vector teapot_spirit_pos */ 4:
                    message.teapotSpiritPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.teapotSpiritPos);
                    break;
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 module_id */ 5:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector safe_point_pos */ 11:
                    message.safePointPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.safePointPos);
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
        /* repeated com.midnights.game.HomeMarkPointFurnitureData furniture_list = 6; */
        for (let i = 0; i < message.furnitureList.length; i++)
            define_4.HomeMarkPointFurnitureData.internalBinaryWrite(message.furnitureList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector teapot_spirit_pos = 4; */
        if (message.teapotSpiritPos)
            define_8.Vector.internalBinaryWrite(message.teapotSpiritPos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 module_id = 5; */
        if (message.moduleId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional com.midnights.game.Vector safe_point_pos = 11; */
        if (message.safePointPos)
            define_8.Vector.internalBinaryWrite(message.safePointPos, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeMarkPointSceneData
 */
exports.HomeMarkPointSceneData = new HomeMarkPointSceneData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeMarkPointNotify", [
            { no: 12, name: "mark_point_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeMarkPointSceneData }
        ]);
    }
    create(value) {
        const message = { markPointDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeMarkPointSceneData mark_point_data_list */ 12:
                    message.markPointDataList.push(exports.HomeMarkPointSceneData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeMarkPointSceneData mark_point_data_list = 12; */
        for (let i = 0; i < message.markPointDataList.length; i++)
            exports.HomeMarkPointSceneData.internalBinaryWrite(message.markPointDataList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeMarkPointNotify
 */
exports.HomeMarkPointNotify = new HomeMarkPointNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAllUnlockedBgmIdListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAllUnlockedBgmIdListNotify", [
            { no: 11, name: "all_unlocked_bgm_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { allUnlockedBgmIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 all_unlocked_bgm_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.allUnlockedBgmIdList.push(reader.uint32());
                    else
                        message.allUnlockedBgmIdList.push(reader.uint32());
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
        /* repeated uint32 all_unlocked_bgm_id_list = 11; */
        if (message.allUnlockedBgmIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.allUnlockedBgmIdList.length; i++)
                writer.uint32(message.allUnlockedBgmIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAllUnlockedBgmIdListNotify
 */
exports.HomeAllUnlockedBgmIdListNotify = new HomeAllUnlockedBgmIdListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeNewUnlockedBgmIdListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeNewUnlockedBgmIdListNotify", [
            { no: 11, name: "new_unlocked_bgm_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { newUnlockedBgmIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 new_unlocked_bgm_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.newUnlockedBgmIdList.push(reader.uint32());
                    else
                        message.newUnlockedBgmIdList.push(reader.uint32());
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
        /* repeated uint32 new_unlocked_bgm_id_list = 11; */
        if (message.newUnlockedBgmIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.newUnlockedBgmIdList.length; i++)
                writer.uint32(message.newUnlockedBgmIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeNewUnlockedBgmIdListNotify
 */
exports.HomeNewUnlockedBgmIdListNotify = new HomeNewUnlockedBgmIdListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeBgmReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeBgmReq", [
            { no: 14, name: "bgm_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bgm_id */ 14:
                    message.bgmId = reader.uint32();
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
        /* optional uint32 bgm_id = 14; */
        if (message.bgmId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.bgmId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeBgmReq
 */
exports.HomeChangeBgmReq = new HomeChangeBgmReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeBgmRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeBgmRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeBgmRsp
 */
exports.HomeChangeBgmRsp = new HomeChangeBgmRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeChangeBgmNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeChangeBgmNotify", [
            { no: 12, name: "bgm_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bgm_id */ 12:
                    message.bgmId = reader.uint32();
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
        /* optional uint32 bgm_id = 12; */
        if (message.bgmId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.bgmId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeChangeBgmNotify
 */
exports.HomeChangeBgmNotify = new HomeChangeBgmNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePreChangeEditModeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePreChangeEditModeNotify", [
            { no: 15, name: "is_enter_edit_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_enter_edit_mode */ 15:
                    message.isEnterEditMode = reader.bool();
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
        /* optional bool is_enter_edit_mode = 15; */
        if (message.isEnterEditMode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isEnterEditMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePreChangeEditModeNotify
 */
exports.HomePreChangeEditModeNotify = new HomePreChangeEditModeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeEnterEditModeFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeEnterEditModeFinishReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeEnterEditModeFinishReq
 */
exports.HomeEnterEditModeFinishReq = new HomeEnterEditModeFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeEnterEditModeFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeEnterEditModeFinishRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeEnterEditModeFinishRsp
 */
exports.HomeEnterEditModeFinishRsp = new HomeEnterEditModeFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeData", [
            { no: 15, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dur_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "begin_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 6, name: "accelerate_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 15:
                    message.index = reader.uint32();
                    break;
                case /* optional uint32 dur_time */ 1:
                    message.durTime = reader.uint32();
                    break;
                case /* optional fixed32 begin_time */ 11:
                    message.beginTime = reader.fixed32();
                    break;
                case /* optional fixed32 accelerate_time */ 6:
                    message.accelerateTime = reader.fixed32();
                    break;
                case /* optional uint32 avatar_id */ 2:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 make_id */ 5:
                    message.makeId = reader.uint32();
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
        /* optional uint32 index = 15; */
        if (message.index !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.index);
        /* optional uint32 dur_time = 1; */
        if (message.durTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.durTime);
        /* optional fixed32 begin_time = 11; */
        if (message.beginTime !== undefined)
            writer.tag(11, runtime_2.WireType.Bit32).fixed32(message.beginTime);
        /* optional fixed32 accelerate_time = 6; */
        if (message.accelerateTime !== undefined)
            writer.tag(6, runtime_2.WireType.Bit32).fixed32(message.accelerateTime);
        /* optional uint32 avatar_id = 2; */
        if (message.avatarId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 make_id = 5; */
        if (message.makeId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeData
 */
exports.FurnitureMakeData = new FurnitureMakeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeSlot$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeSlot", [
            { no: 14, name: "furniture_make_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FurnitureMakeData }
        ]);
    }
    create(value) {
        const message = { furnitureMakeDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FurnitureMakeData furniture_make_data_list */ 14:
                    message.furnitureMakeDataList.push(exports.FurnitureMakeData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.FurnitureMakeData furniture_make_data_list = 14; */
        for (let i = 0; i < message.furnitureMakeDataList.length; i++)
            exports.FurnitureMakeData.internalBinaryWrite(message.furnitureMakeDataList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeSlot
 */
exports.FurnitureMakeSlot = new FurnitureMakeSlot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeBeHelpedData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeBeHelpedData", [
            { no: 12, name: "time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 11, name: "icon", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "player_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "profile_picture", kind: "message", T: () => define_3.ProfilePicture }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 time */ 12:
                    message.time = reader.fixed32();
                    break;
                case /* optional uint32 icon */ 11:
                    message.icon = reader.uint32();
                    break;
                case /* optional uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* optional string player_name */ 10:
                    message.playerName = reader.string();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 1:
                    message.profilePicture = define_3.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
        /* optional fixed32 time = 12; */
        if (message.time !== undefined)
            writer.tag(12, runtime_2.WireType.Bit32).fixed32(message.time);
        /* optional uint32 icon = 11; */
        if (message.icon !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.icon);
        /* optional uint32 uid = 7; */
        if (message.uid !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional string player_name = 10; */
        if (message.playerName !== undefined)
            writer.tag(10, runtime_2.WireType.LengthDelimited).string(message.playerName);
        /* optional com.midnights.game.ProfilePicture profile_picture = 1; */
        if (message.profilePicture)
            define_3.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeBeHelpedData
 */
exports.FurnitureMakeBeHelpedData = new FurnitureMakeBeHelpedData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeHelpData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeHelpData", [
            { no: 2, name: "times", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 times */ 2:
                    message.times = reader.uint32();
                    break;
                case /* optional uint32 uid */ 13:
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
        /* optional uint32 times = 2; */
        if (message.times !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.times);
        /* optional uint32 uid = 13; */
        if (message.uid !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeHelpData
 */
exports.FurnitureMakeHelpData = new FurnitureMakeHelpData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeMakeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeMakeInfo", [
            { no: 13, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "make_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 furniture_id */ 13:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional uint32 make_count */ 9:
                    message.makeCount = reader.uint32();
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
        /* optional uint32 furniture_id = 13; */
        if (message.furnitureId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional uint32 make_count = 9; */
        if (message.makeCount !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.makeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeMakeInfo
 */
exports.FurnitureMakeMakeInfo = new FurnitureMakeMakeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeReq
 */
exports.FurnitureMakeReq = new FurnitureMakeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeRsp", [
            { no: 13, name: "helped_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FurnitureMakeBeHelpedData },
            { no: 4, name: "make_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FurnitureMakeMakeInfo },
            { no: 1, name: "furniture_make_slot", kind: "message", T: () => exports.FurnitureMakeSlot },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "help_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FurnitureMakeHelpData }
        ]);
    }
    create(value) {
        const message = { helpedDataList: [], makeInfoList: [], helpDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FurnitureMakeBeHelpedData helped_data_list */ 13:
                    message.helpedDataList.push(exports.FurnitureMakeBeHelpedData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.FurnitureMakeMakeInfo make_info_list */ 4:
                    message.makeInfoList.push(exports.FurnitureMakeMakeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot */ 1:
                    message.furnitureMakeSlot = exports.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.FurnitureMakeHelpData help_data_list */ 2:
                    message.helpDataList.push(exports.FurnitureMakeHelpData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.FurnitureMakeBeHelpedData helped_data_list = 13; */
        for (let i = 0; i < message.helpedDataList.length; i++)
            exports.FurnitureMakeBeHelpedData.internalBinaryWrite(message.helpedDataList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.FurnitureMakeMakeInfo make_info_list = 4; */
        for (let i = 0; i < message.makeInfoList.length; i++)
            exports.FurnitureMakeMakeInfo.internalBinaryWrite(message.makeInfoList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot = 1; */
        if (message.furnitureMakeSlot)
            exports.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.FurnitureMakeHelpData help_data_list = 2; */
        for (let i = 0; i < message.helpDataList.length; i++)
            exports.FurnitureMakeHelpData.internalBinaryWrite(message.helpDataList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeRsp
 */
exports.FurnitureMakeRsp = new FurnitureMakeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeFurnitureMakeReq", [
            { no: 8, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_fast_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 8:
                    message.index = reader.uint32();
                    break;
                case /* optional bool is_fast_finish */ 12:
                    message.isFastFinish = reader.bool();
                    break;
                case /* optional uint32 make_id */ 7:
                    message.makeId = reader.uint32();
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
        /* optional uint32 index = 8; */
        if (message.index !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.index);
        /* optional bool is_fast_finish = 12; */
        if (message.isFastFinish !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isFastFinish);
        /* optional uint32 make_id = 7; */
        if (message.makeId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeFurnitureMakeReq
 */
exports.TakeFurnitureMakeReq = new TakeFurnitureMakeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeFurnitureMakeRsp", [
            { no: 8, name: "furniture_make_slot", kind: "message", T: () => exports.FurnitureMakeSlot },
            { no: 2, name: "return_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ItemParam },
            { no: 6, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "output_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ItemParam }
        ]);
    }
    create(value) {
        const message = { returnItemList: [], outputItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot */ 8:
                    message.furnitureMakeSlot = exports.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* repeated com.midnights.game.ItemParam return_item_list */ 2:
                    message.returnItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 make_id */ 6:
                    message.makeId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam output_item_list */ 14:
                    message.outputItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot = 8; */
        if (message.furnitureMakeSlot)
            exports.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam return_item_list = 2; */
        for (let i = 0; i < message.returnItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.returnItemList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 make_id = 6; */
        if (message.makeId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.makeId);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ItemParam output_item_list = 14; */
        for (let i = 0; i < message.outputItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.outputItemList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeFurnitureMakeRsp
 */
exports.TakeFurnitureMakeRsp = new TakeFurnitureMakeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeFinishNotify", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeFinishNotify
 */
exports.FurnitureMakeFinishNotify = new FurnitureMakeFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeStartReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeStartReq", [
            { no: 9, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 9:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 make_id */ 1:
                    message.makeId = reader.uint32();
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
        /* optional uint32 avatar_id = 9; */
        if (message.avatarId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 make_id = 1; */
        if (message.makeId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeStartReq
 */
exports.FurnitureMakeStartReq = new FurnitureMakeStartReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeStartRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeStartRsp", [
            { no: 5, name: "furniture_make_slot", kind: "message", T: () => exports.FurnitureMakeSlot },
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
                case /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot */ 5:
                    message.furnitureMakeSlot = exports.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot = 5; */
        if (message.furnitureMakeSlot)
            exports.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeStartRsp
 */
exports.FurnitureMakeStartRsp = new FurnitureMakeStartRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeCancelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeCancelReq", [
            { no: 4, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 4:
                    message.index = reader.uint32();
                    break;
                case /* optional uint32 make_id */ 15:
                    message.makeId = reader.uint32();
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
        /* optional uint32 index = 4; */
        if (message.index !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.index);
        /* optional uint32 make_id = 15; */
        if (message.makeId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeCancelReq
 */
exports.FurnitureMakeCancelReq = new FurnitureMakeCancelReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeCancelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeCancelRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "make_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "furniture_make_slot", kind: "message", T: () => exports.FurnitureMakeSlot }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 make_id */ 2:
                    message.makeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot */ 15:
                    message.furnitureMakeSlot = exports.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 make_id = 2; */
        if (message.makeId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.makeId);
        /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot = 15; */
        if (message.furnitureMakeSlot)
            exports.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeCancelRsp
 */
exports.FurnitureMakeCancelRsp = new FurnitureMakeCancelRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeBeHelpedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeBeHelpedNotify", [
            { no: 7, name: "furniture_make_slot", kind: "message", T: () => exports.FurnitureMakeSlot },
            { no: 2, name: "furniture_make_helped_data", kind: "message", T: () => exports.FurnitureMakeBeHelpedData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot */ 7:
                    message.furnitureMakeSlot = exports.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
                    break;
                case /* optional com.midnights.game.FurnitureMakeBeHelpedData furniture_make_helped_data */ 2:
                    message.furnitureMakeHelpedData = exports.FurnitureMakeBeHelpedData.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeHelpedData);
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
        /* optional com.midnights.game.FurnitureMakeSlot furniture_make_slot = 7; */
        if (message.furnitureMakeSlot)
            exports.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.FurnitureMakeBeHelpedData furniture_make_helped_data = 2; */
        if (message.furnitureMakeHelpedData)
            exports.FurnitureMakeBeHelpedData.internalBinaryWrite(message.furnitureMakeHelpedData, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeBeHelpedNotify
 */
exports.FurnitureMakeBeHelpedNotify = new FurnitureMakeBeHelpedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeHelpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeHelpReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeHelpReq
 */
exports.FurnitureMakeHelpReq = new FurnitureMakeHelpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeHelpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FurnitureMakeHelpRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "help_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FurnitureMakeHelpData }
        ]);
    }
    create(value) {
        const message = { helpDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.FurnitureMakeHelpData help_data_list */ 6:
                    message.helpDataList.push(exports.FurnitureMakeHelpData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.FurnitureMakeHelpData help_data_list = 6; */
        for (let i = 0; i < message.helpDataList.length; i++)
            exports.FurnitureMakeHelpData.internalBinaryWrite(message.helpDataList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FurnitureMakeHelpRsp
 */
exports.FurnitureMakeHelpRsp = new FurnitureMakeHelpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FunitureMakeMakeInfoChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FunitureMakeMakeInfoChangeNotify", [
            { no: 1, name: "make_info", kind: "message", T: () => exports.FurnitureMakeMakeInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FurnitureMakeMakeInfo make_info */ 1:
                    message.makeInfo = exports.FurnitureMakeMakeInfo.internalBinaryRead(reader, reader.uint32(), options, message.makeInfo);
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
        /* optional com.midnights.game.FurnitureMakeMakeInfo make_info = 1; */
        if (message.makeInfo)
            exports.FurnitureMakeMakeInfo.internalBinaryWrite(message.makeInfo, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FunitureMakeMakeInfoChangeNotify
 */
exports.FunitureMakeMakeInfoChangeNotify = new FunitureMakeMakeInfoChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopInfo", [
            { no: 9, name: "next_close_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 11, name: "next_guest_open_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 7, name: "djinn_rot", kind: "message", T: () => define_8.Vector },
            { no: 4, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "next_open_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "djinn_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 next_close_time */ 9:
                    message.nextCloseTime = reader.fixed32();
                    break;
                case /* optional fixed32 next_guest_open_time */ 11:
                    message.nextGuestOpenTime = reader.fixed32();
                    break;
                case /* optional com.midnights.game.Vector djinn_rot */ 7:
                    message.djinnRot = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnRot);
                    break;
                case /* optional uint32 uid */ 4:
                    message.uid = reader.uint32();
                    break;
                case /* optional fixed32 next_open_time */ 6:
                    message.nextOpenTime = reader.fixed32();
                    break;
                case /* optional com.midnights.game.Vector djinn_pos */ 2:
                    message.djinnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.djinnPos);
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
        /* optional fixed32 next_close_time = 9; */
        if (message.nextCloseTime !== undefined)
            writer.tag(9, runtime_2.WireType.Bit32).fixed32(message.nextCloseTime);
        /* optional fixed32 next_guest_open_time = 11; */
        if (message.nextGuestOpenTime !== undefined)
            writer.tag(11, runtime_2.WireType.Bit32).fixed32(message.nextGuestOpenTime);
        /* optional com.midnights.game.Vector djinn_rot = 7; */
        if (message.djinnRot)
            define_8.Vector.internalBinaryWrite(message.djinnRot, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 uid = 4; */
        if (message.uid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional fixed32 next_open_time = 6; */
        if (message.nextOpenTime !== undefined)
            writer.tag(6, runtime_2.WireType.Bit32).fixed32(message.nextOpenTime);
        /* optional com.midnights.game.Vector djinn_pos = 2; */
        if (message.djinnPos)
            define_8.Vector.internalBinaryWrite(message.djinnPos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopInfo
 */
exports.HomeLimitedShopInfo = new HomeLimitedShopInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopInfoReq
 */
exports.HomeLimitedShopInfoReq = new HomeLimitedShopInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopInfoRsp", [
            { no: 10, name: "shop_info", kind: "message", T: () => exports.HomeLimitedShopInfo },
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
                case /* optional com.midnights.game.HomeLimitedShopInfo shop_info */ 10:
                    message.shopInfo = exports.HomeLimitedShopInfo.internalBinaryRead(reader, reader.uint32(), options, message.shopInfo);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HomeLimitedShopInfo shop_info = 10; */
        if (message.shopInfo)
            exports.HomeLimitedShopInfo.internalBinaryWrite(message.shopInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopInfoRsp
 */
exports.HomeLimitedShopInfoRsp = new HomeLimitedShopInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopInfoNotify", [
            { no: 2, name: "shop_info", kind: "message", T: () => exports.HomeLimitedShopInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeLimitedShopInfo shop_info */ 2:
                    message.shopInfo = exports.HomeLimitedShopInfo.internalBinaryRead(reader, reader.uint32(), options, message.shopInfo);
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
        /* optional com.midnights.game.HomeLimitedShopInfo shop_info = 2; */
        if (message.shopInfo)
            exports.HomeLimitedShopInfo.internalBinaryWrite(message.shopInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopInfoNotify
 */
exports.HomeLimitedShopInfoNotify = new HomeLimitedShopInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopGoods", [
            { no: 8, name: "buy_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ItemParam },
            { no: 1, name: "bought_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "goods_item", kind: "message", T: () => define_2.ItemParam },
            { no: 13, name: "goods_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "disable_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 buy_limit */ 8:
                    message.buyLimit = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam cost_item_list */ 15:
                    message.costItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 bought_num */ 1:
                    message.boughtNum = reader.uint32();
                    break;
                case /* optional com.midnights.game.ItemParam goods_item */ 6:
                    message.goodsItem = define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
                    break;
                case /* optional uint32 goods_id */ 13:
                    message.goodsId = reader.uint32();
                    break;
                case /* optional uint32 disable_type */ 3:
                    message.disableType = reader.uint32();
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
        /* optional uint32 buy_limit = 8; */
        if (message.buyLimit !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.buyLimit);
        /* repeated com.midnights.game.ItemParam cost_item_list = 15; */
        for (let i = 0; i < message.costItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 bought_num = 1; */
        if (message.boughtNum !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.boughtNum);
        /* optional com.midnights.game.ItemParam goods_item = 6; */
        if (message.goodsItem)
            define_2.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 goods_id = 13; */
        if (message.goodsId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.goodsId);
        /* optional uint32 disable_type = 3; */
        if (message.disableType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.disableType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopGoods
 */
exports.HomeLimitedShopGoods = new HomeLimitedShopGoods$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShop$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShop", [
            { no: 8, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeLimitedShopGoods }
        ]);
    }
    create(value) {
        const message = { goodsList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeLimitedShopGoods goods_list */ 8:
                    message.goodsList.push(exports.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeLimitedShopGoods goods_list = 8; */
        for (let i = 0; i < message.goodsList.length; i++)
            exports.HomeLimitedShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShop
 */
exports.HomeLimitedShop = new HomeLimitedShop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopGoodsListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopGoodsListReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopGoodsListReq
 */
exports.HomeLimitedShopGoodsListReq = new HomeLimitedShopGoodsListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopGoodsListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopGoodsListRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "shop", kind: "message", T: () => exports.HomeLimitedShop }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.HomeLimitedShop shop */ 12:
                    message.shop = exports.HomeLimitedShop.internalBinaryRead(reader, reader.uint32(), options, message.shop);
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
        /* optional com.midnights.game.HomeLimitedShop shop = 12; */
        if (message.shop)
            exports.HomeLimitedShop.internalBinaryWrite(message.shop, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopGoodsListRsp
 */
exports.HomeLimitedShopGoodsListRsp = new HomeLimitedShopGoodsListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopBuyGoodsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopBuyGoodsReq", [
            { no: 3, name: "goods", kind: "message", T: () => exports.HomeLimitedShopGoods },
            { no: 10, name: "buy_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeLimitedShopGoods goods */ 3:
                    message.goods = exports.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
                    break;
                case /* optional uint32 buy_count */ 10:
                    message.buyCount = reader.uint32();
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
        /* optional com.midnights.game.HomeLimitedShopGoods goods = 3; */
        if (message.goods)
            exports.HomeLimitedShopGoods.internalBinaryWrite(message.goods, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 buy_count = 10; */
        if (message.buyCount !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.buyCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopBuyGoodsReq
 */
exports.HomeLimitedShopBuyGoodsReq = new HomeLimitedShopBuyGoodsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopBuyGoodsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopBuyGoodsRsp", [
            { no: 13, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeLimitedShopGoods },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "goods", kind: "message", T: () => exports.HomeLimitedShopGoods },
            { no: 8, name: "buy_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { goodsList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeLimitedShopGoods goods_list */ 13:
                    message.goodsList.push(exports.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.HomeLimitedShopGoods goods */ 5:
                    message.goods = exports.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
                    break;
                case /* optional uint32 buy_count */ 8:
                    message.buyCount = reader.uint32();
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
        /* repeated com.midnights.game.HomeLimitedShopGoods goods_list = 13; */
        for (let i = 0; i < message.goodsList.length; i++)
            exports.HomeLimitedShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.HomeLimitedShopGoods goods = 5; */
        if (message.goods)
            exports.HomeLimitedShopGoods.internalBinaryWrite(message.goods, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 buy_count = 8; */
        if (message.buyCount !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.buyCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopBuyGoodsRsp
 */
exports.HomeLimitedShopBuyGoodsRsp = new HomeLimitedShopBuyGoodsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopInfoChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeLimitedShopInfoChangeNotify", [
            { no: 5, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeLimitedShopGoods }
        ]);
    }
    create(value) {
        const message = { goodsList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeLimitedShopGoods goods_list */ 5:
                    message.goodsList.push(exports.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeLimitedShopGoods goods_list = 5; */
        for (let i = 0; i < message.goodsList.length; i++)
            exports.HomeLimitedShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeLimitedShopInfoChangeNotify
 */
exports.HomeLimitedShopInfoChangeNotify = new HomeLimitedShopInfoChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResource$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResource", [
            { no: 15, name: "next_refresh_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 3, name: "store_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "store_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 next_refresh_time */ 15:
                    message.nextRefreshTime = reader.fixed32();
                    break;
                case /* optional uint32 store_limit */ 3:
                    message.storeLimit = reader.uint32();
                    break;
                case /* optional uint32 store_value */ 12:
                    message.storeValue = reader.uint32();
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
        /* optional fixed32 next_refresh_time = 15; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(15, runtime_2.WireType.Bit32).fixed32(message.nextRefreshTime);
        /* optional uint32 store_limit = 3; */
        if (message.storeLimit !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.storeLimit);
        /* optional uint32 store_value = 12; */
        if (message.storeValue !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.storeValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResource
 */
exports.HomeResource = new HomeResource$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResourceNotify", [
            { no: 9, name: "home_coin", kind: "message", T: () => exports.HomeResource },
            { no: 8, name: "fetter_exp", kind: "message", T: () => exports.HomeResource }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeResource home_coin */ 9:
                    message.homeCoin = exports.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.homeCoin);
                    break;
                case /* optional com.midnights.game.HomeResource fetter_exp */ 8:
                    message.fetterExp = exports.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.fetterExp);
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
        /* optional com.midnights.game.HomeResource home_coin = 9; */
        if (message.homeCoin)
            exports.HomeResource.internalBinaryWrite(message.homeCoin, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.HomeResource fetter_exp = 8; */
        if (message.fetterExp)
            exports.HomeResource.internalBinaryWrite(message.fetterExp, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResourceNotify
 */
exports.HomeResourceNotify = new HomeResourceNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceTakeHomeCoinReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResourceTakeHomeCoinReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResourceTakeHomeCoinReq
 */
exports.HomeResourceTakeHomeCoinReq = new HomeResourceTakeHomeCoinReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceTakeHomeCoinRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResourceTakeHomeCoinRsp", [
            { no: 7, name: "home_coin", kind: "message", T: () => exports.HomeResource },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeResource home_coin */ 7:
                    message.homeCoin = exports.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.homeCoin);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HomeResource home_coin = 7; */
        if (message.homeCoin)
            exports.HomeResource.internalBinaryWrite(message.homeCoin, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResourceTakeHomeCoinRsp
 */
exports.HomeResourceTakeHomeCoinRsp = new HomeResourceTakeHomeCoinRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceTakeFetterExpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResourceTakeFetterExpReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResourceTakeFetterExpReq
 */
exports.HomeResourceTakeFetterExpReq = new HomeResourceTakeFetterExpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceTakeFetterExpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeResourceTakeFetterExpRsp", [
            { no: 4, name: "fetter_exp", kind: "message", T: () => exports.HomeResource },
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
                case /* optional com.midnights.game.HomeResource fetter_exp */ 4:
                    message.fetterExp = exports.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.fetterExp);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HomeResource fetter_exp = 4; */
        if (message.fetterExp)
            exports.HomeResource.internalBinaryWrite(message.fetterExp, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeResourceTakeFetterExpRsp
 */
exports.HomeResourceTakeFetterExpRsp = new HomeResourceTakeFetterExpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarTalkFinishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarTalkFinishInfo", [
            { no: 9, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "finish_talk_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishTalkIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 9:
                    message.avatarId = reader.uint32();
                    break;
                case /* repeated uint32 finish_talk_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishTalkIdList.push(reader.uint32());
                    else
                        message.finishTalkIdList.push(reader.uint32());
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
        /* optional uint32 avatar_id = 9; */
        if (message.avatarId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* repeated uint32 finish_talk_id_list = 3; */
        if (message.finishTalkIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishTalkIdList.length; i++)
                writer.uint32(message.finishTalkIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarTalkFinishInfo
 */
exports.HomeAvatarTalkFinishInfo = new HomeAvatarTalkFinishInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarTalkFinishInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarTalkFinishInfoNotify", [
            { no: 9, name: "avatar_talk_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeAvatarTalkFinishInfo }
        ]);
    }
    create(value) {
        const message = { avatarTalkInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeAvatarTalkFinishInfo avatar_talk_info_list */ 9:
                    message.avatarTalkInfoList.push(exports.HomeAvatarTalkFinishInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeAvatarTalkFinishInfo avatar_talk_info_list = 9; */
        for (let i = 0; i < message.avatarTalkInfoList.length; i++)
            exports.HomeAvatarTalkFinishInfo.internalBinaryWrite(message.avatarTalkInfoList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarTalkFinishInfoNotify
 */
exports.HomeAvatarTalkFinishInfoNotify = new HomeAvatarTalkFinishInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarTalkReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarTalkReq", [
            { no: 12, name: "talk_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 talk_id */ 12:
                    message.talkId = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 15:
                    message.avatarId = reader.uint32();
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
        /* optional uint32 talk_id = 12; */
        if (message.talkId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.talkId);
        /* optional uint32 avatar_id = 15; */
        if (message.avatarId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarTalkReq
 */
exports.HomeAvatarTalkReq = new HomeAvatarTalkReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarTalkRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarTalkRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "avatar_talk_info", kind: "message", T: () => exports.HomeAvatarTalkFinishInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.HomeAvatarTalkFinishInfo avatar_talk_info */ 3:
                    message.avatarTalkInfo = exports.HomeAvatarTalkFinishInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarTalkInfo);
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
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.HomeAvatarTalkFinishInfo avatar_talk_info = 3; */
        if (message.avatarTalkInfo)
            exports.HomeAvatarTalkFinishInfo.internalBinaryWrite(message.avatarTalkInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarTalkRsp
 */
exports.HomeAvatarTalkRsp = new HomeAvatarTalkRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarRewardEventInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "suite_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "random_position", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 guid */ 12:
                    message.guid = reader.uint32();
                    break;
                case /* optional uint32 event_id */ 2:
                    message.eventId = reader.uint32();
                    break;
                case /* optional uint32 suite_id */ 14:
                    message.suiteId = reader.uint32();
                    break;
                case /* optional uint32 random_position */ 9:
                    message.randomPosition = reader.uint32();
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
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 guid = 12; */
        if (message.guid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional uint32 event_id = 2; */
        if (message.eventId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.eventId);
        /* optional uint32 suite_id = 14; */
        if (message.suiteId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.suiteId);
        /* optional uint32 random_position = 9; */
        if (message.randomPosition !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.randomPosition);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarRewardEventInfo
 */
exports.HomeAvatarRewardEventInfo = new HomeAvatarRewardEventInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarRewardEventNotify", [
            { no: 4, name: "is_event_trigger", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "reward_event", kind: "message", T: () => exports.HomeAvatarRewardEventInfo },
            { no: 8, name: "pending_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeAvatarRewardEventInfo }
        ]);
    }
    create(value) {
        const message = { pendingList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_event_trigger */ 4:
                    message.isEventTrigger = reader.bool();
                    break;
                case /* optional com.midnights.game.HomeAvatarRewardEventInfo reward_event */ 2:
                    message.rewardEvent = exports.HomeAvatarRewardEventInfo.internalBinaryRead(reader, reader.uint32(), options, message.rewardEvent);
                    break;
                case /* repeated com.midnights.game.HomeAvatarRewardEventInfo pending_list */ 8:
                    message.pendingList.push(exports.HomeAvatarRewardEventInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_event_trigger = 4; */
        if (message.isEventTrigger !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isEventTrigger);
        /* optional com.midnights.game.HomeAvatarRewardEventInfo reward_event = 2; */
        if (message.rewardEvent)
            exports.HomeAvatarRewardEventInfo.internalBinaryWrite(message.rewardEvent, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.HomeAvatarRewardEventInfo pending_list = 8; */
        for (let i = 0; i < message.pendingList.length; i++)
            exports.HomeAvatarRewardEventInfo.internalBinaryWrite(message.pendingList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarRewardEventNotify
 */
exports.HomeAvatarRewardEventNotify = new HomeAvatarRewardEventNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventGetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarRewardEventGetReq", [
            { no: 9, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 event_id */ 9:
                    message.eventId = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 7:
                    message.avatarId = reader.uint32();
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
        /* optional uint32 event_id = 9; */
        if (message.eventId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.eventId);
        /* optional uint32 avatar_id = 7; */
        if (message.avatarId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarRewardEventGetReq
 */
exports.HomeAvatarRewardEventGetReq = new HomeAvatarRewardEventGetReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventGetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarRewardEventGetRsp", [
            { no: 4, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ItemParam },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated com.midnights.game.ItemParam item_list */ 4:
                    message.itemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 event_id */ 8:
                    message.eventId = reader.uint32();
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
        /* repeated com.midnights.game.ItemParam item_list = 4; */
        for (let i = 0; i < message.itemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 event_id = 8; */
        if (message.eventId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.eventId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarRewardEventGetRsp
 */
exports.HomeAvatarRewardEventGetRsp = new HomeAvatarRewardEventGetRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonEventInfo", [
            { no: 3, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "suit_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "event_over_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "random_position", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 3:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 guid */ 8:
                    message.guid = reader.uint32();
                    break;
                case /* optional uint32 event_id */ 9:
                    message.eventId = reader.uint32();
                    break;
                case /* optional uint32 suit_id */ 12:
                    message.suitId = reader.uint32();
                    break;
                case /* optional uint32 event_over_time */ 2:
                    message.eventOverTime = reader.uint32();
                    break;
                case /* optional uint32 random_position */ 10:
                    message.randomPosition = reader.uint32();
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
        /* optional uint32 avatar_id = 3; */
        if (message.avatarId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 guid = 8; */
        if (message.guid !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional uint32 event_id = 9; */
        if (message.eventId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.eventId);
        /* optional uint32 suit_id = 12; */
        if (message.suitId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.suitId);
        /* optional uint32 event_over_time = 2; */
        if (message.eventOverTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.eventOverTime);
        /* optional uint32 random_position = 10; */
        if (message.randomPosition !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.randomPosition);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonEventInfo
 */
exports.HomeAvatarSummonEventInfo = new HomeAvatarSummonEventInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonAllEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonAllEventNotify", [
            { no: 1, name: "summon_event_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeAvatarSummonEventInfo }
        ]);
    }
    create(value) {
        const message = { summonEventList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeAvatarSummonEventInfo summon_event_list */ 1:
                    message.summonEventList.push(exports.HomeAvatarSummonEventInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeAvatarSummonEventInfo summon_event_list = 1; */
        for (let i = 0; i < message.summonEventList.length; i++)
            exports.HomeAvatarSummonEventInfo.internalBinaryWrite(message.summonEventList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonAllEventNotify
 */
exports.HomeAvatarSummonAllEventNotify = new HomeAvatarSummonAllEventNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonEventReq", [
            { no: 7, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "suit_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 suit_id */ 9:
                    message.suitId = reader.uint32();
                    break;
                case /* optional uint32 guid */ 12:
                    message.guid = reader.uint32();
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
        /* optional uint32 avatar_id = 7; */
        if (message.avatarId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 suit_id = 9; */
        if (message.suitId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.suitId);
        /* optional uint32 guid = 12; */
        if (message.guid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonEventReq
 */
exports.HomeAvatarSummonEventReq = new HomeAvatarSummonEventReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonEventRsp", [
            { no: 11, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 event_id */ 11:
                    message.eventId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 event_id = 11; */
        if (message.eventId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.eventId);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonEventRsp
 */
exports.HomeAvatarSummonEventRsp = new HomeAvatarSummonEventRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarCostumeChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarCostumeChangeNotify", [
            { no: 4, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 avatar_id */ 10:
                    message.avatarId = reader.uint32();
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
        /* optional uint32 costume_id = 4; */
        if (message.costumeId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional uint32 avatar_id = 10; */
        if (message.avatarId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarCostumeChangeNotify
 */
exports.HomeAvatarCostumeChangeNotify = new HomeAvatarCostumeChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonFinishReq", [
            { no: 12, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 event_id */ 12:
                    message.eventId = reader.uint32();
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
        /* optional uint32 event_id = 12; */
        if (message.eventId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.eventId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonFinishReq
 */
exports.HomeAvatarSummonFinishReq = new HomeAvatarSummonFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarSummonFinishRsp", [
            { no: 8, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 event_id */ 8:
                    message.eventId = reader.uint32();
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
        /* optional uint32 event_id = 8; */
        if (message.eventId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.eventId);
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
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarSummonFinishRsp
 */
exports.HomeAvatarSummonFinishRsp = new HomeAvatarSummonFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvtarAllFinishRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvtarAllFinishRewardNotify", [
            { no: 13, name: "event_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { eventIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 event_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.eventIdList.push(reader.uint32());
                    else
                        message.eventIdList.push(reader.uint32());
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
        /* repeated uint32 event_id_list = 13; */
        if (message.eventIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.eventIdList.length; i++)
                writer.uint32(message.eventIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvtarAllFinishRewardNotify
 */
exports.HomeAvtarAllFinishRewardNotify = new HomeAvtarAllFinishRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarAllFinishRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeAvatarAllFinishRewardNotify", [
            { no: 7, name: "event_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { eventIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 event_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.eventIdList.push(reader.uint32());
                    else
                        message.eventIdList.push(reader.uint32());
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
        /* repeated uint32 event_id_list = 7; */
        if (message.eventIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.eventIdList.length; i++)
                writer.uint32(message.eventIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeAvatarAllFinishRewardNotify
 */
exports.HomeAvatarAllFinishRewardNotify = new HomeAvatarAllFinishRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneInitFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneInitFinishReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneInitFinishReq
 */
exports.HomeSceneInitFinishReq = new HomeSceneInitFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSceneInitFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSceneInitFinishRsp", [
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
                case /* optional int32 retcode */ 6:
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
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSceneInitFinishRsp
 */
exports.HomeSceneInitFinishRsp = new HomeSceneInitFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSeedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantSeedReq", [
            { no: 4, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "field_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "seed_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { seedIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 4:
                    message.index = reader.uint32();
                    break;
                case /* optional uint32 field_guid */ 14:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* repeated uint32 seed_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seedIdList.push(reader.uint32());
                    else
                        message.seedIdList.push(reader.uint32());
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
        /* optional uint32 index = 4; */
        if (message.index !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.index);
        /* optional uint32 field_guid = 14; */
        if (message.fieldGuid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.fieldGuid);
        /* repeated uint32 seed_id_list = 13; */
        if (message.seedIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seedIdList.length; i++)
                writer.uint32(message.seedIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantSeedReq
 */
exports.HomePlantSeedReq = new HomePlantSeedReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSeedRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantSeedRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantSeedRsp
 */
exports.HomePlantSeedRsp = new HomePlantSeedRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantWeedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantWeedReq", [
            { no: 9, name: "field_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 field_guid */ 9:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* optional uint32 index */ 3:
                    message.index = reader.uint32();
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
        /* optional uint32 field_guid = 9; */
        if (message.fieldGuid !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.fieldGuid);
        /* optional uint32 index = 3; */
        if (message.index !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantWeedReq
 */
exports.HomePlantWeedReq = new HomePlantWeedReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantWeedRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantWeedRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantWeedRsp
 */
exports.HomePlantWeedRsp = new HomePlantWeedRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSubFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantSubFieldData", [
            { no: 15, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "field_status", kind: "enum", opt: true, T: () => ["com.midnights.game.HomePlantFieldStatus", HomePlantFieldStatus] },
            { no: 9, name: "home_gather_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "seed_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "end_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value) {
        const message = { entityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 entity_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.HomePlantFieldStatus field_status */ 14:
                    message.fieldStatus = reader.int32();
                    break;
                case /* optional uint32 home_gather_id */ 9:
                    message.homeGatherId = reader.uint32();
                    break;
                case /* optional uint32 seed_id */ 8:
                    message.seedId = reader.uint32();
                    break;
                case /* optional fixed32 end_time */ 4:
                    message.endTime = reader.fixed32();
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
        /* repeated uint32 entity_id_list = 15; */
        if (message.entityIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.HomePlantFieldStatus field_status = 14; */
        if (message.fieldStatus !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.fieldStatus);
        /* optional uint32 home_gather_id = 9; */
        if (message.homeGatherId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.homeGatherId);
        /* optional uint32 seed_id = 8; */
        if (message.seedId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.seedId);
        /* optional fixed32 end_time = 4; */
        if (message.endTime !== undefined)
            writer.tag(4, runtime_2.WireType.Bit32).fixed32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantSubFieldData
 */
exports.HomePlantSubFieldData = new HomePlantSubFieldData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantFieldData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantFieldData", [
            { no: 13, name: "sub_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomePlantSubFieldData },
            { no: 9, name: "furniture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "field_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "spawn_pos", kind: "message", T: () => define_8.Vector }
        ]);
    }
    create(value) {
        const message = { subFieldList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomePlantSubFieldData sub_field_list */ 13:
                    message.subFieldList.push(exports.HomePlantSubFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 furniture_id */ 9:
                    message.furnitureId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 field_guid */ 10:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector spawn_pos */ 12:
                    message.spawnPos = define_8.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* repeated com.midnights.game.HomePlantSubFieldData sub_field_list = 13; */
        for (let i = 0; i < message.subFieldList.length; i++)
            exports.HomePlantSubFieldData.internalBinaryWrite(message.subFieldList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 furniture_id = 9; */
        if (message.furnitureId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.furnitureId);
        /* optional uint32 scene_id = 1; */
        if (message.sceneId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 field_guid = 10; */
        if (message.fieldGuid !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.fieldGuid);
        /* optional com.midnights.game.Vector spawn_pos = 12; */
        if (message.spawnPos)
            define_8.Vector.internalBinaryWrite(message.spawnPos, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantFieldData
 */
exports.HomePlantFieldData = new HomePlantFieldData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantInfoNotify", [
            { no: 4, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomePlantFieldData }
        ]);
    }
    create(value) {
        const message = { fieldList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomePlantFieldData field_list */ 4:
                    message.fieldList.push(exports.HomePlantFieldData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomePlantFieldData field_list = 4; */
        for (let i = 0; i < message.fieldList.length; i++)
            exports.HomePlantFieldData.internalBinaryWrite(message.fieldList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantInfoNotify
 */
exports.HomePlantInfoNotify = new HomePlantInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantFieldNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantFieldNotify", [
            { no: 13, name: "field", kind: "message", T: () => exports.HomePlantFieldData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomePlantFieldData field */ 13:
                    message.field = exports.HomePlantFieldData.internalBinaryRead(reader, reader.uint32(), options, message.field);
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
        /* optional com.midnights.game.HomePlantFieldData field = 13; */
        if (message.field)
            exports.HomePlantFieldData.internalBinaryWrite(message.field, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantFieldNotify
 */
exports.HomePlantFieldNotify = new HomePlantFieldNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantInfoReq
 */
exports.HomePlantInfoReq = new HomePlantInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePlantInfoRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomePlantFieldData }
        ]);
    }
    create(value) {
        const message = { fieldList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.HomePlantFieldData field_list */ 15:
                    message.fieldList.push(exports.HomePlantFieldData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.HomePlantFieldData field_list = 15; */
        for (let i = 0; i < message.fieldList.length; i++)
            exports.HomePlantFieldData.internalBinaryWrite(message.fieldList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePlantInfoRsp
 */
exports.HomePlantInfoRsp = new HomePlantInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeTransferReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeTransferReq", [
            { no: 1, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_transfer_to_safe_point", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 guid */ 1:
                    message.guid = reader.uint32();
                    break;
                case /* optional bool is_transfer_to_safe_point */ 12:
                    message.isTransferToSafePoint = reader.bool();
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
        /* optional uint32 guid = 1; */
        if (message.guid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional bool is_transfer_to_safe_point = 12; */
        if (message.isTransferToSafePoint !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isTransferToSafePoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeTransferReq
 */
exports.HomeTransferReq = new HomeTransferReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeTransferRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeTransferRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeTransferRsp
 */
exports.HomeTransferRsp = new HomeTransferRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFishFarmingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFishFarmingInfo", [
            { no: 11, name: "fish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "fishpond_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 fish_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                case /* optional uint32 fishpond_guid */ 14:
                    message.fishpondGuid = reader.uint32();
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
        /* repeated uint32 fish_id_list = 11; */
        if (message.fishIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishIdList.length; i++)
                writer.uint32(message.fishIdList[i]);
            writer.join();
        }
        /* optional uint32 fishpond_guid = 14; */
        if (message.fishpondGuid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.fishpondGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFishFarmingInfo
 */
exports.HomeFishFarmingInfo = new HomeFishFarmingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetFishFarmingInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetFishFarmingInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetFishFarmingInfoReq
 */
exports.HomeGetFishFarmingInfoReq = new HomeGetFishFarmingInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetFishFarmingInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetFishFarmingInfoRsp", [
            { no: 7, name: "fish_farming_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFishFarmingInfo },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { fishFarmingInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeFishFarmingInfo fish_farming_info_list */ 7:
                    message.fishFarmingInfoList.push(exports.HomeFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.HomeFishFarmingInfo fish_farming_info_list = 7; */
        for (let i = 0; i < message.fishFarmingInfoList.length; i++)
            exports.HomeFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfoList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetFishFarmingInfoRsp
 */
exports.HomeGetFishFarmingInfoRsp = new HomeGetFishFarmingInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeFishFarmingInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeFishFarmingInfoNotify", [
            { no: 15, name: "fish_farming_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeFishFarmingInfo }
        ]);
    }
    create(value) {
        const message = { fishFarmingInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeFishFarmingInfo fish_farming_info_list */ 15:
                    message.fishFarmingInfoList.push(exports.HomeFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeFishFarmingInfo fish_farming_info_list = 15; */
        for (let i = 0; i < message.fishFarmingInfoList.length; i++)
            exports.HomeFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfoList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeFishFarmingInfoNotify
 */
exports.HomeFishFarmingInfoNotify = new HomeFishFarmingInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateFishFarmingInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateFishFarmingInfoReq", [
            { no: 5, name: "fish_farming_info", kind: "message", T: () => exports.HomeFishFarmingInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeFishFarmingInfo fish_farming_info */ 5:
                    message.fishFarmingInfo = exports.HomeFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options, message.fishFarmingInfo);
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
        /* optional com.midnights.game.HomeFishFarmingInfo fish_farming_info = 5; */
        if (message.fishFarmingInfo)
            exports.HomeFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateFishFarmingInfoReq
 */
exports.HomeUpdateFishFarmingInfoReq = new HomeUpdateFishFarmingInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateFishFarmingInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateFishFarmingInfoRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateFishFarmingInfoRsp
 */
exports.HomeUpdateFishFarmingInfoRsp = new HomeUpdateFishFarmingInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeScenePointFishFarmingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeScenePointFishFarmingInfo", [
            { no: 13, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "fish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "local_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 fish_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                case /* optional uint32 local_entity_id */ 3:
                    message.localEntityId = reader.uint32();
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
        /* optional uint32 scene_id = 13; */
        if (message.sceneId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 fish_id_list = 1; */
        if (message.fishIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishIdList.length; i++)
                writer.uint32(message.fishIdList[i]);
            writer.join();
        }
        /* optional uint32 local_entity_id = 3; */
        if (message.localEntityId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.localEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeScenePointFishFarmingInfo
 */
exports.HomeScenePointFishFarmingInfo = new HomeScenePointFishFarmingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateScenePointFishFarmingInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateScenePointFishFarmingInfoReq", [
            { no: 7, name: "fish_farming_info", kind: "message", T: () => exports.HomeScenePointFishFarmingInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeScenePointFishFarmingInfo fish_farming_info */ 7:
                    message.fishFarmingInfo = exports.HomeScenePointFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options, message.fishFarmingInfo);
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
        /* optional com.midnights.game.HomeScenePointFishFarmingInfo fish_farming_info = 7; */
        if (message.fishFarmingInfo)
            exports.HomeScenePointFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateScenePointFishFarmingInfoReq
 */
exports.HomeUpdateScenePointFishFarmingInfoReq = new HomeUpdateScenePointFishFarmingInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdateScenePointFishFarmingInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdateScenePointFishFarmingInfoRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdateScenePointFishFarmingInfoRsp
 */
exports.HomeUpdateScenePointFishFarmingInfoRsp = new HomeUpdateScenePointFishFarmingInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeScenePointFishFarmingInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeScenePointFishFarmingInfoNotify", [
            { no: 7, name: "fish_farming_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeScenePointFishFarmingInfo }
        ]);
    }
    create(value) {
        const message = { fishFarmingInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeScenePointFishFarmingInfo fish_farming_info_list */ 7:
                    message.fishFarmingInfoList.push(exports.HomeScenePointFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeScenePointFishFarmingInfo fish_farming_info_list = 7; */
        for (let i = 0; i < message.fishFarmingInfoList.length; i++)
            exports.HomeScenePointFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfoList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeScenePointFishFarmingInfoNotify
 */
exports.HomeScenePointFishFarmingInfoNotify = new HomeScenePointFishFarmingInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeCustomFurnitureInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeCustomFurnitureInfo", [
            { no: 12, name: "sub_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.CustomCommonNodeInfo },
            { no: 6, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { subFurnitureList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CustomCommonNodeInfo sub_furniture_list */ 12:
                    message.subFurnitureList.push(define_1.CustomCommonNodeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 guid */ 6:
                    message.guid = reader.uint32();
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
        /* repeated com.midnights.game.CustomCommonNodeInfo sub_furniture_list = 12; */
        for (let i = 0; i < message.subFurnitureList.length; i++)
            define_1.CustomCommonNodeInfo.internalBinaryWrite(message.subFurnitureList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 guid = 6; */
        if (message.guid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeCustomFurnitureInfo
 */
exports.HomeCustomFurnitureInfo = new HomeCustomFurnitureInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeCustomFurnitureInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeCustomFurnitureInfoNotify", [
            { no: 4, name: "delete_custom_furniture_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "used_sub_furniture_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "custom_furniture_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeCustomFurnitureInfo }
        ]);
    }
    create(value) {
        const message = { deleteCustomFurnitureList: [], usedSubFurnitureCountMap: {}, customFurnitureInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 delete_custom_furniture_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteCustomFurnitureList.push(reader.uint32());
                    else
                        message.deleteCustomFurnitureList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> used_sub_furniture_count_map */ 15:
                    this.binaryReadMap15(message.usedSubFurnitureCountMap, reader, options);
                    break;
                case /* repeated com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info_list */ 11:
                    message.customFurnitureInfoList.push(exports.HomeCustomFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options));
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.HomeCustomFurnitureInfoNotify.used_sub_furniture_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 delete_custom_furniture_list = 4; */
        if (message.deleteCustomFurnitureList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteCustomFurnitureList.length; i++)
                writer.uint32(message.deleteCustomFurnitureList[i]);
            writer.join();
        }
        /* map<uint32, uint32> used_sub_furniture_count_map = 15; */
        for (let k of Object.keys(message.usedSubFurnitureCountMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.usedSubFurnitureCountMap[k]).join();
        /* repeated com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info_list = 11; */
        for (let i = 0; i < message.customFurnitureInfoList.length; i++)
            exports.HomeCustomFurnitureInfo.internalBinaryWrite(message.customFurnitureInfoList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeCustomFurnitureInfoNotify
 */
exports.HomeCustomFurnitureInfoNotify = new HomeCustomFurnitureInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeEditCustomFurnitureReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeEditCustomFurnitureReq", [
            { no: 15, name: "custom_furniture_info", kind: "message", T: () => exports.HomeCustomFurnitureInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info */ 15:
                    message.customFurnitureInfo = exports.HomeCustomFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options, message.customFurnitureInfo);
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
        /* optional com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info = 15; */
        if (message.customFurnitureInfo)
            exports.HomeCustomFurnitureInfo.internalBinaryWrite(message.customFurnitureInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeEditCustomFurnitureReq
 */
exports.HomeEditCustomFurnitureReq = new HomeEditCustomFurnitureReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeEditCustomFurnitureRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeEditCustomFurnitureRsp", [
            { no: 11, name: "custom_furniture_info", kind: "message", T: () => exports.HomeCustomFurnitureInfo },
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
                case /* optional com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info */ 11:
                    message.customFurnitureInfo = exports.HomeCustomFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options, message.customFurnitureInfo);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HomeCustomFurnitureInfo custom_furniture_info = 11; */
        if (message.customFurnitureInfo)
            exports.HomeCustomFurnitureInfo.internalBinaryWrite(message.customFurnitureInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeEditCustomFurnitureRsp
 */
exports.HomeEditCustomFurnitureRsp = new HomeEditCustomFurnitureRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePictureFrameInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePictureFrameInfo", [
            { no: 11, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "picture_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 guid */ 11:
                    message.guid = reader.uint32();
                    break;
                case /* optional uint32 picture_id */ 6:
                    message.pictureId = reader.uint32();
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
        /* optional uint32 guid = 11; */
        if (message.guid !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.guid);
        /* optional uint32 picture_id = 6; */
        if (message.pictureId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.pictureId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePictureFrameInfo
 */
exports.HomePictureFrameInfo = new HomePictureFrameInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePictureFrameInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePictureFrameInfoNotify", [
            { no: 12, name: "picture_frame_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomePictureFrameInfo }
        ]);
    }
    create(value) {
        const message = { pictureFrameInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomePictureFrameInfo picture_frame_info_list */ 12:
                    message.pictureFrameInfoList.push(exports.HomePictureFrameInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomePictureFrameInfo picture_frame_info_list = 12; */
        for (let i = 0; i < message.pictureFrameInfoList.length; i++)
            exports.HomePictureFrameInfo.internalBinaryWrite(message.pictureFrameInfoList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePictureFrameInfoNotify
 */
exports.HomePictureFrameInfoNotify = new HomePictureFrameInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdatePictureFrameInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdatePictureFrameInfoReq", [
            { no: 1, name: "picture_frame_info", kind: "message", T: () => exports.HomePictureFrameInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomePictureFrameInfo picture_frame_info */ 1:
                    message.pictureFrameInfo = exports.HomePictureFrameInfo.internalBinaryRead(reader, reader.uint32(), options, message.pictureFrameInfo);
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
        /* optional com.midnights.game.HomePictureFrameInfo picture_frame_info = 1; */
        if (message.pictureFrameInfo)
            exports.HomePictureFrameInfo.internalBinaryWrite(message.pictureFrameInfo, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdatePictureFrameInfoReq
 */
exports.HomeUpdatePictureFrameInfoReq = new HomeUpdatePictureFrameInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeUpdatePictureFrameInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeUpdatePictureFrameInfoRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "picture_frame_info", kind: "message", T: () => exports.HomePictureFrameInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.HomePictureFrameInfo picture_frame_info */ 14:
                    message.pictureFrameInfo = exports.HomePictureFrameInfo.internalBinaryRead(reader, reader.uint32(), options, message.pictureFrameInfo);
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.HomePictureFrameInfo picture_frame_info = 14; */
        if (message.pictureFrameInfo)
            exports.HomePictureFrameInfo.internalBinaryWrite(message.pictureFrameInfo, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeUpdatePictureFrameInfoRsp
 */
exports.HomeUpdatePictureFrameInfoRsp = new HomeUpdatePictureFrameInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeRacingGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeRacingGallerySettleNotify", [
            { no: 11, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "settle_info", kind: "message", T: () => cmd_gallery_3.RacingGallerySettleInfo },
            { no: 7, name: "rank", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional com.midnights.game.RacingGallerySettleInfo settle_info */ 12:
                    message.settleInfo = cmd_gallery_3.RacingGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* optional uint32 rank */ 7:
                    message.rank = reader.uint32();
                    break;
                case /* optional bool is_new_record */ 2:
                    message.isNewRecord = reader.bool();
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
        /* optional uint32 gallery_id = 11; */
        if (message.galleryId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.galleryId);
        /* optional com.midnights.game.RacingGallerySettleInfo settle_info = 12; */
        if (message.settleInfo)
            cmd_gallery_3.RacingGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 rank = 7; */
        if (message.rank !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.rank);
        /* optional bool is_new_record = 2; */
        if (message.isNewRecord !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeRacingGallerySettleNotify
 */
exports.HomeRacingGallerySettleNotify = new HomeRacingGallerySettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGroupPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGroupPlayerInfo", [
            { no: 14, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "player_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "profile_picture", kind: "message", T: () => define_3.ProfilePicture }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string online_id */ 14:
                    message.onlineId = reader.string();
                    break;
                case /* optional string psn_id */ 6:
                    message.psnId = reader.string();
                    break;
                case /* optional string nickname */ 15:
                    message.nickname = reader.string();
                    break;
                case /* optional uint32 player_level */ 4:
                    message.playerLevel = reader.uint32();
                    break;
                case /* optional uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 5:
                    message.profilePicture = define_3.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
        /* optional string online_id = 14; */
        if (message.onlineId !== undefined)
            writer.tag(14, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* optional string psn_id = 6; */
        if (message.psnId !== undefined)
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.psnId);
        /* optional string nickname = 15; */
        if (message.nickname !== undefined)
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* optional uint32 player_level = 4; */
        if (message.playerLevel !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.playerLevel);
        /* optional uint32 uid = 2; */
        if (message.uid !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.ProfilePicture profile_picture = 5; */
        if (message.profilePicture)
            define_3.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGroupPlayerInfo
 */
exports.HomeGroupPlayerInfo = new HomeGroupPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeRacingGalleryRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeRacingGalleryRecord", [
            { no: 1, name: "use_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "player_info", kind: "message", T: () => exports.HomeGroupPlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 use_time */ 1:
                    message.useTime = reader.uint32();
                    break;
                case /* optional uint32 timestamp */ 8:
                    message.timestamp = reader.uint32();
                    break;
                case /* optional com.midnights.game.HomeGroupPlayerInfo player_info */ 12:
                    message.playerInfo = exports.HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
        /* optional uint32 use_time = 1; */
        if (message.useTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.useTime);
        /* optional uint32 timestamp = 8; */
        if (message.timestamp !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.timestamp);
        /* optional com.midnights.game.HomeGroupPlayerInfo player_info = 12; */
        if (message.playerInfo)
            exports.HomeGroupPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeRacingGalleryRecord
 */
exports.HomeRacingGalleryRecord = new HomeRacingGalleryRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeRacingRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeRacingRecord", [
            { no: 7, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeRacingGalleryRecord }
        ]);
    }
    create(value) {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeRacingGalleryRecord record_list */ 7:
                    message.recordList.push(exports.HomeRacingGalleryRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeRacingGalleryRecord record_list = 7; */
        for (let i = 0; i < message.recordList.length; i++)
            exports.HomeRacingGalleryRecord.internalBinaryWrite(message.recordList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeRacingRecord
 */
exports.HomeRacingRecord = new HomeRacingRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonGalleryRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBalloonGalleryRecord", [
            { no: 12, name: "hit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "player_info", kind: "message", T: () => exports.HomeGroupPlayerInfo },
            { no: 2, name: "timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 hit_count */ 12:
                    message.hitCount = reader.uint32();
                    break;
                case /* optional uint32 score */ 11:
                    message.score = reader.uint32();
                    break;
                case /* optional com.midnights.game.HomeGroupPlayerInfo player_info */ 5:
                    message.playerInfo = exports.HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* optional uint32 timestamp */ 2:
                    message.timestamp = reader.uint32();
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
        /* optional uint32 hit_count = 12; */
        if (message.hitCount !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.hitCount);
        /* optional uint32 score = 11; */
        if (message.score !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.score);
        /* optional com.midnights.game.HomeGroupPlayerInfo player_info = 5; */
        if (message.playerInfo)
            exports.HomeGroupPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 timestamp = 2; */
        if (message.timestamp !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBalloonGalleryRecord
 */
exports.HomeBalloonGalleryRecord = new HomeBalloonGalleryRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBalloonRecord", [
            { no: 15, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBalloonGalleryRecord }
        ]);
    }
    create(value) {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeBalloonGalleryRecord record_list */ 15:
                    message.recordList.push(exports.HomeBalloonGalleryRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeBalloonGalleryRecord record_list = 15; */
        for (let i = 0; i < message.recordList.length; i++)
            exports.HomeBalloonGalleryRecord.internalBinaryWrite(message.recordList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBalloonRecord
 */
exports.HomeBalloonRecord = new HomeBalloonRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeStakePlayRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeStakePlayRecord", [
            { no: 14, name: "engaged_player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeGroupPlayerInfo },
            { no: 9, name: "timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { engagedPlayerInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeGroupPlayerInfo engaged_player_info_list */ 14:
                    message.engagedPlayerInfoList.push(exports.HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 timestamp */ 9:
                    message.timestamp = reader.uint32();
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
        /* repeated com.midnights.game.HomeGroupPlayerInfo engaged_player_info_list = 14; */
        for (let i = 0; i < message.engagedPlayerInfoList.length; i++)
            exports.HomeGroupPlayerInfo.internalBinaryWrite(message.engagedPlayerInfoList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 timestamp = 9; */
        if (message.timestamp !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeStakePlayRecord
 */
exports.HomeStakePlayRecord = new HomeStakePlayRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeStakeRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeStakeRecord", [
            { no: 13, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeStakePlayRecord }
        ]);
    }
    create(value) {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeStakePlayRecord record_list */ 13:
                    message.recordList.push(exports.HomeStakePlayRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeStakePlayRecord record_list = 13; */
        for (let i = 0; i < message.recordList.length; i++)
            exports.HomeStakePlayRecord.internalBinaryWrite(message.recordList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeStakeRecord
 */
exports.HomeStakeRecord = new HomeStakeRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurniturePlayerScore$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSeekFurniturePlayerScore", [
            { no: 12, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "player_info", kind: "message", T: () => exports.HomeGroupPlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 12:
                    message.score = reader.uint32();
                    break;
                case /* optional com.midnights.game.HomeGroupPlayerInfo player_info */ 10:
                    message.playerInfo = exports.HomeGroupPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
        /* optional uint32 score = 12; */
        if (message.score !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.score);
        /* optional com.midnights.game.HomeGroupPlayerInfo player_info = 10; */
        if (message.playerInfo)
            exports.HomeGroupPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSeekFurniturePlayerScore
 */
exports.HomeSeekFurniturePlayerScore = new HomeSeekFurniturePlayerScore$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurnitureOneRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSeekFurnitureOneRecord", [
            { no: 8, name: "engaged_player_score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeSeekFurniturePlayerScore },
            { no: 3, name: "timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { engagedPlayerScoreList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeSeekFurniturePlayerScore engaged_player_score_list */ 8:
                    message.engagedPlayerScoreList.push(exports.HomeSeekFurniturePlayerScore.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 timestamp */ 3:
                    message.timestamp = reader.uint32();
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
        /* repeated com.midnights.game.HomeSeekFurniturePlayerScore engaged_player_score_list = 8; */
        for (let i = 0; i < message.engagedPlayerScoreList.length; i++)
            exports.HomeSeekFurniturePlayerScore.internalBinaryWrite(message.engagedPlayerScoreList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 timestamp = 3; */
        if (message.timestamp !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSeekFurnitureOneRecord
 */
exports.HomeSeekFurnitureOneRecord = new HomeSeekFurnitureOneRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurnitureAllRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSeekFurnitureAllRecord", [
            { no: 5, name: "record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeSeekFurnitureOneRecord }
        ]);
    }
    create(value) {
        const message = { recordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HomeSeekFurnitureOneRecord record_list */ 5:
                    message.recordList.push(exports.HomeSeekFurnitureOneRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HomeSeekFurnitureOneRecord record_list = 5; */
        for (let i = 0; i < message.recordList.length; i++)
            exports.HomeSeekFurnitureOneRecord.internalBinaryWrite(message.recordList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSeekFurnitureAllRecord
 */
exports.HomeSeekFurnitureAllRecord = new HomeSeekFurnitureAllRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGroupRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGroupRecord", [
            { no: 5, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 467, name: "racing_gallery_info", kind: "message", oneof: "detail", T: () => exports.HomeRacingRecord },
            { no: 1410, name: "balloon_gallery_info", kind: "message", oneof: "detail", T: () => exports.HomeBalloonRecord },
            { no: 347, name: "stake_play_info", kind: "message", oneof: "detail", T: () => exports.HomeStakeRecord },
            { no: 1822, name: "seek_furniture_gallery_info", kind: "message", oneof: "detail", T: () => exports.HomeSeekFurnitureAllRecord }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* com.midnights.game.HomeRacingRecord racing_gallery_info */ 467:
                    message.detail = {
                        oneofKind: "racingGalleryInfo",
                        racingGalleryInfo: exports.HomeRacingRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.racingGalleryInfo)
                    };
                    break;
                case /* com.midnights.game.HomeBalloonRecord balloon_gallery_info */ 1410:
                    message.detail = {
                        oneofKind: "balloonGalleryInfo",
                        balloonGalleryInfo: exports.HomeBalloonRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.balloonGalleryInfo)
                    };
                    break;
                case /* com.midnights.game.HomeStakeRecord stake_play_info */ 347:
                    message.detail = {
                        oneofKind: "stakePlayInfo",
                        stakePlayInfo: exports.HomeStakeRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.stakePlayInfo)
                    };
                    break;
                case /* com.midnights.game.HomeSeekFurnitureAllRecord seek_furniture_gallery_info */ 1822:
                    message.detail = {
                        oneofKind: "seekFurnitureGalleryInfo",
                        seekFurnitureGalleryInfo: exports.HomeSeekFurnitureAllRecord.internalBinaryRead(reader, reader.uint32(), options, message.detail.seekFurnitureGalleryInfo)
                    };
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
        /* optional uint32 group_id = 5; */
        if (message.groupId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.groupId);
        /* com.midnights.game.HomeRacingRecord racing_gallery_info = 467; */
        if (message.detail.oneofKind === "racingGalleryInfo")
            exports.HomeRacingRecord.internalBinaryWrite(message.detail.racingGalleryInfo, writer.tag(467, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HomeBalloonRecord balloon_gallery_info = 1410; */
        if (message.detail.oneofKind === "balloonGalleryInfo")
            exports.HomeBalloonRecord.internalBinaryWrite(message.detail.balloonGalleryInfo, writer.tag(1410, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HomeStakeRecord stake_play_info = 347; */
        if (message.detail.oneofKind === "stakePlayInfo")
            exports.HomeStakeRecord.internalBinaryWrite(message.detail.stakePlayInfo, writer.tag(347, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HomeSeekFurnitureAllRecord seek_furniture_gallery_info = 1822; */
        if (message.detail.oneofKind === "seekFurnitureGalleryInfo")
            exports.HomeSeekFurnitureAllRecord.internalBinaryWrite(message.detail.seekFurnitureGalleryInfo, writer.tag(1822, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGroupRecord
 */
exports.HomeGroupRecord = new HomeGroupRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetGroupRecordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetGroupRecordReq", [
            { no: 14, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 14:
                    message.groupId = reader.uint32();
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
        /* optional uint32 group_id = 14; */
        if (message.groupId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetGroupRecordReq
 */
exports.HomeGetGroupRecordReq = new HomeGetGroupRecordReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetGroupRecordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetGroupRecordRsp", [
            { no: 7, name: "group_record", kind: "message", T: () => exports.HomeGroupRecord },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "record_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeGroupRecord group_record */ 7:
                    message.groupRecord = exports.HomeGroupRecord.internalBinaryRead(reader, reader.uint32(), options, message.groupRecord);
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 record_type */ 1:
                    message.recordType = reader.uint32();
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
        /* optional com.midnights.game.HomeGroupRecord group_record = 7; */
        if (message.groupRecord)
            exports.HomeGroupRecord.internalBinaryWrite(message.groupRecord, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 record_type = 1; */
        if (message.recordType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.recordType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetGroupRecordRsp
 */
exports.HomeGetGroupRecordRsp = new HomeGetGroupRecordRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeClearGroupRecordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeClearGroupRecordReq", [
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
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
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeClearGroupRecordReq
 */
exports.HomeClearGroupRecordReq = new HomeClearGroupRecordReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeClearGroupRecordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeClearGroupRecordRsp", [
            { no: 4, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 group_id */ 4:
                    message.groupId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 4; */
        if (message.groupId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeClearGroupRecordRsp
 */
exports.HomeClearGroupRecordRsp = new HomeClearGroupRecordRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBalloonGallerySettleNotify", [
            { no: 1, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "settle_info", kind: "message", T: () => cmd_gallery_2.BalloonGallerySettleInfo },
            { no: 6, name: "rank", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 1:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional com.midnights.game.BalloonGallerySettleInfo settle_info */ 5:
                    message.settleInfo = cmd_gallery_2.BalloonGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* optional uint32 rank */ 6:
                    message.rank = reader.uint32();
                    break;
                case /* optional bool is_new_record */ 4:
                    message.isNewRecord = reader.bool();
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
        /* optional uint32 gallery_id = 1; */
        if (message.galleryId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.galleryId);
        /* optional com.midnights.game.BalloonGallerySettleInfo settle_info = 5; */
        if (message.settleInfo)
            cmd_gallery_2.BalloonGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 rank = 6; */
        if (message.rank !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.rank);
        /* optional bool is_new_record = 4; */
        if (message.isNewRecord !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBalloonGallerySettleNotify
 */
exports.HomeBalloonGallerySettleNotify = new HomeBalloonGallerySettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonGalleryScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBalloonGalleryScoreNotify", [
            { no: 10, name: "trigger_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "add_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 trigger_entity_id */ 10:
                    message.triggerEntityId = reader.uint32();
                    break;
                case /* optional uint32 cur_score */ 9:
                    message.curScore = reader.uint32();
                    break;
                case /* optional uint32 add_score */ 7:
                    message.addScore = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 5:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 trigger_entity_id = 10; */
        if (message.triggerEntityId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.triggerEntityId);
        /* optional uint32 cur_score = 9; */
        if (message.curScore !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.curScore);
        /* optional uint32 add_score = 7; */
        if (message.addScore !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.addScore);
        /* optional uint32 gallery_id = 5; */
        if (message.galleryId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBalloonGalleryScoreNotify
 */
exports.HomeBalloonGalleryScoreNotify = new HomeBalloonGalleryScoreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurnitureGalleryScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSeekFurnitureGalleryScoreNotify", [
            { no: 15, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "record", kind: "message", T: () => exports.HomeSeekFurnitureOneRecord },
            { no: 4, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", cmd_gallery_1.GalleryStopReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 15:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional com.midnights.game.HomeSeekFurnitureOneRecord record */ 5:
                    message.record = exports.HomeSeekFurnitureOneRecord.internalBinaryRead(reader, reader.uint32(), options, message.record);
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 4:
                    message.reason = reader.int32();
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
        /* optional uint32 gallery_id = 15; */
        if (message.galleryId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.galleryId);
        /* optional com.midnights.game.HomeSeekFurnitureOneRecord record = 5; */
        if (message.record)
            exports.HomeSeekFurnitureOneRecord.internalBinaryWrite(message.record, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.GalleryStopReason reason = 4; */
        if (message.reason !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSeekFurnitureGalleryScoreNotify
 */
exports.HomeSeekFurnitureGalleryScoreNotify = new HomeSeekFurnitureGalleryScoreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeExchangeWoodInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHomeExchangeWoodInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHomeExchangeWoodInfoReq
 */
exports.GetHomeExchangeWoodInfoReq = new GetHomeExchangeWoodInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeExchangeWoodInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHomeExchangeWoodInfoRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "wood_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo }
        ]);
    }
    create(value) {
        const message = { woodInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo wood_info_list */ 5:
                    message.woodInfoList.push(exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo wood_info_list = 5; */
        for (let i = 0; i < message.woodInfoList.length; i++)
            exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo.internalBinaryWrite(message.woodInfoList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHomeExchangeWoodInfoRsp
 */
exports.GetHomeExchangeWoodInfoRsp = new GetHomeExchangeWoodInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo", [
            { no: 7, name: "exchange_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "exchanged_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "next_refresh_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 2, name: "wood_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 exchange_limit */ 7:
                    message.exchangeLimit = reader.uint32();
                    break;
                case /* optional uint32 exchanged_count */ 12:
                    message.exchangedCount = reader.uint32();
                    break;
                case /* optional fixed32 next_refresh_time */ 14:
                    message.nextRefreshTime = reader.fixed32();
                    break;
                case /* optional uint32 wood_id */ 2:
                    message.woodId = reader.uint32();
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
        /* optional uint32 exchange_limit = 7; */
        if (message.exchangeLimit !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.exchangeLimit);
        /* optional uint32 exchanged_count = 12; */
        if (message.exchangedCount !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.exchangedCount);
        /* optional fixed32 next_refresh_time = 14; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(14, runtime_2.WireType.Bit32).fixed32(message.nextRefreshTime);
        /* optional uint32 wood_id = 2; */
        if (message.woodId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.woodId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHomeExchangeWoodInfoRsp.HomeExchangeWoodInfo
 */
exports.GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo = new GetHomeExchangeWoodInfoRsp_HomeExchangeWoodInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeExchangeWoodReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeExchangeWoodReq", [
            { no: 3, name: "material_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "wood_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { materialCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> material_count_map */ 3:
                    this.binaryReadMap3(message.materialCountMap, reader, options);
                    break;
                case /* optional uint32 wood_id */ 12:
                    message.woodId = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.HomeExchangeWoodReq.material_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> material_count_map = 3; */
        for (let k of Object.keys(message.materialCountMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.materialCountMap[k]).join();
        /* optional uint32 wood_id = 12; */
        if (message.woodId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.woodId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeExchangeWoodReq
 */
exports.HomeExchangeWoodReq = new HomeExchangeWoodReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeExchangeWoodRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeExchangeWoodRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "wood_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "wood_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "exchanged_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 wood_id */ 1:
                    message.woodId = reader.uint32();
                    break;
                case /* optional uint32 wood_count */ 3:
                    message.woodCount = reader.uint32();
                    break;
                case /* optional uint32 exchanged_count */ 2:
                    message.exchangedCount = reader.uint32();
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 wood_id = 1; */
        if (message.woodId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.woodId);
        /* optional uint32 wood_count = 3; */
        if (message.woodCount !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.woodCount);
        /* optional uint32 exchanged_count = 2; */
        if (message.exchangedCount !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.exchangedCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeExchangeWoodRsp
 */
exports.HomeExchangeWoodRsp = new HomeExchangeWoodRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintSlotInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintSlotInfo", [
            { no: 12, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_allow_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "create_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 module_id */ 12:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 block_id */ 14:
                    message.blockId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 slot_id */ 5:
                    message.slotId = reader.uint32();
                    break;
                case /* optional string share_code */ 11:
                    message.shareCode = reader.string();
                    break;
                case /* optional bool is_allow_copy */ 3:
                    message.isAllowCopy = reader.bool();
                    break;
                case /* optional uint32 create_time */ 6:
                    message.createTime = reader.uint32();
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
        /* optional uint32 module_id = 12; */
        if (message.moduleId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 block_id = 14; */
        if (message.blockId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 slot_id = 5; */
        if (message.slotId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.slotId);
        /* optional string share_code = 11; */
        if (message.shareCode !== undefined)
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        /* optional bool is_allow_copy = 3; */
        if (message.isAllowCopy !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isAllowCopy);
        /* optional uint32 create_time = 6; */
        if (message.createTime !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.createTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintSlotInfo
 */
exports.HomeBlueprintSlotInfo = new HomeBlueprintSlotInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetBlueprintSlotInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetBlueprintSlotInfoReq", []);
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
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetBlueprintSlotInfoReq
 */
exports.HomeGetBlueprintSlotInfoReq = new HomeGetBlueprintSlotInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetBlueprintSlotInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGetBlueprintSlotInfoRsp", [
            { no: 6, name: "delete_slot_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "slot_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HomeBlueprintSlotInfo },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteSlotIdList: [], slotInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 delete_slot_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteSlotIdList.push(reader.uint32());
                    else
                        message.deleteSlotIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.HomeBlueprintSlotInfo slot_info_list */ 3:
                    message.slotInfoList.push(exports.HomeBlueprintSlotInfo.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 delete_slot_id_list = 6; */
        if (message.deleteSlotIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteSlotIdList.length; i++)
                writer.uint32(message.deleteSlotIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.HomeBlueprintSlotInfo slot_info_list = 3; */
        for (let i = 0; i < message.slotInfoList.length; i++)
            exports.HomeBlueprintSlotInfo.internalBinaryWrite(message.slotInfoList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGetBlueprintSlotInfoRsp
 */
exports.HomeGetBlueprintSlotInfoRsp = new HomeGetBlueprintSlotInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSetBlueprintSlotOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSetBlueprintSlotOptionReq", [
            { no: 1, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_allow_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 slot_id */ 1:
                    message.slotId = reader.uint32();
                    break;
                case /* optional bool is_allow_copy */ 8:
                    message.isAllowCopy = reader.bool();
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
        /* optional uint32 slot_id = 1; */
        if (message.slotId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.slotId);
        /* optional bool is_allow_copy = 8; */
        if (message.isAllowCopy !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isAllowCopy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSetBlueprintSlotOptionReq
 */
exports.HomeSetBlueprintSlotOptionReq = new HomeSetBlueprintSlotOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSetBlueprintSlotOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSetBlueprintSlotOptionRsp", [
            { no: 13, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_allow_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
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
                case /* optional uint32 slot_id */ 13:
                    message.slotId = reader.uint32();
                    break;
                case /* optional bool is_allow_copy */ 7:
                    message.isAllowCopy = reader.bool();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 slot_id = 13; */
        if (message.slotId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.slotId);
        /* optional bool is_allow_copy = 7; */
        if (message.isAllowCopy !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isAllowCopy);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSetBlueprintSlotOptionRsp
 */
exports.HomeSetBlueprintSlotOptionRsp = new HomeSetBlueprintSlotOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSetBlueprintFriendOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSetBlueprintFriendOptionReq", [
            { no: 9, name: "is_allow_friend_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_allow_friend_copy */ 9:
                    message.isAllowFriendCopy = reader.bool();
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
        /* optional bool is_allow_friend_copy = 9; */
        if (message.isAllowFriendCopy !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isAllowFriendCopy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSetBlueprintFriendOptionReq
 */
exports.HomeSetBlueprintFriendOptionReq = new HomeSetBlueprintFriendOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSetBlueprintFriendOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSetBlueprintFriendOptionRsp", [
            { no: 2, name: "is_allow_friend_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
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
                case /* optional bool is_allow_friend_copy */ 2:
                    message.isAllowFriendCopy = reader.bool();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_allow_friend_copy = 2; */
        if (message.isAllowFriendCopy !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isAllowFriendCopy);
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSetBlueprintFriendOptionRsp
 */
exports.HomeSetBlueprintFriendOptionRsp = new HomeSetBlueprintFriendOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintInfoNotify", [
            { no: 15, name: "is_allow_friend_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_allow_friend_copy */ 15:
                    message.isAllowFriendCopy = reader.bool();
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
        /* optional bool is_allow_friend_copy = 15; */
        if (message.isAllowFriendCopy !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isAllowFriendCopy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintInfoNotify
 */
exports.HomeBlueprintInfoNotify = new HomeBlueprintInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePreviewBlueprintReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePreviewBlueprintReq", [
            { no: 7, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string share_code */ 7:
                    message.shareCode = reader.string();
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
        /* optional string share_code = 7; */
        if (message.shareCode !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePreviewBlueprintReq
 */
exports.HomePreviewBlueprintReq = new HomePreviewBlueprintReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomePreviewBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomePreviewBlueprintRsp", [
            { no: 12, name: "scene_arrangement_info", kind: "message", T: () => exports.HomeSceneArrangementInfo },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info */ 12:
                    message.sceneArrangementInfo = exports.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional string share_code */ 14:
                    message.shareCode = reader.string();
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
        /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info = 12; */
        if (message.sceneArrangementInfo)
            exports.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional string share_code = 14; */
        if (message.shareCode !== undefined)
            writer.tag(14, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomePreviewBlueprintRsp
 */
exports.HomePreviewBlueprintRsp = new HomePreviewBlueprintRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeCreateBlueprintReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeCreateBlueprintReq", [
            { no: 2, name: "scene_arrangement_info", kind: "message", T: () => exports.HomeSceneArrangementInfo },
            { no: 13, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "server_share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "gen_share_code_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info */ 2:
                    message.sceneArrangementInfo = exports.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* optional uint32 slot_id */ 13:
                    message.slotId = reader.uint32();
                    break;
                case /* optional string server_share_code */ 6:
                    message.serverShareCode = reader.string();
                    break;
                case /* optional uint32 gen_share_code_count */ 4:
                    message.genShareCodeCount = reader.uint32();
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
        /* optional com.midnights.game.HomeSceneArrangementInfo scene_arrangement_info = 2; */
        if (message.sceneArrangementInfo)
            exports.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 slot_id = 13; */
        if (message.slotId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.slotId);
        /* optional string server_share_code = 6; */
        if (message.serverShareCode !== undefined)
            writer.tag(6, runtime_2.WireType.LengthDelimited).string(message.serverShareCode);
        /* optional uint32 gen_share_code_count = 4; */
        if (message.genShareCodeCount !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.genShareCodeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeCreateBlueprintReq
 */
exports.HomeCreateBlueprintReq = new HomeCreateBlueprintReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeCreateBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeCreateBlueprintRsp", [
            { no: 1, name: "slot_info", kind: "message", T: () => exports.HomeBlueprintSlotInfo },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HomeBlueprintSlotInfo slot_info */ 1:
                    message.slotInfo = exports.HomeBlueprintSlotInfo.internalBinaryRead(reader, reader.uint32(), options, message.slotInfo);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HomeBlueprintSlotInfo slot_info = 1; */
        if (message.slotInfo)
            exports.HomeBlueprintSlotInfo.internalBinaryWrite(message.slotInfo, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeCreateBlueprintRsp
 */
exports.HomeCreateBlueprintRsp = new HomeCreateBlueprintRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeDeleteBlueprintReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeDeleteBlueprintReq", [
            { no: 2, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 slot_id */ 2:
                    message.slotId = reader.uint32();
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
        /* optional uint32 slot_id = 2; */
        if (message.slotId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.slotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeDeleteBlueprintReq
 */
exports.HomeDeleteBlueprintReq = new HomeDeleteBlueprintReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeDeleteBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeDeleteBlueprintRsp", [
            { no: 5, name: "slot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 slot_id */ 5:
                    message.slotId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 slot_id = 5; */
        if (message.slotId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.slotId);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeDeleteBlueprintRsp
 */
exports.HomeDeleteBlueprintRsp = new HomeDeleteBlueprintRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintSearchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintSearchInfo", [
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 module_id */ 9:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional string share_code */ 8:
                    message.shareCode = reader.string();
                    break;
                case /* optional uint32 block_id */ 12:
                    message.blockId = reader.uint32();
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
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 module_id = 9; */
        if (message.moduleId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.moduleId);
        /* optional string share_code = 8; */
        if (message.shareCode !== undefined)
            writer.tag(8, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        /* optional uint32 block_id = 12; */
        if (message.blockId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.blockId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintSearchInfo
 */
exports.HomeBlueprintSearchInfo = new HomeBlueprintSearchInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSearchBlueprintReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSearchBlueprintReq", [
            { no: 13, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string share_code */ 13:
                    message.shareCode = reader.string();
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
        /* optional string share_code = 13; */
        if (message.shareCode !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.shareCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSearchBlueprintReq
 */
exports.HomeSearchBlueprintReq = new HomeSearchBlueprintReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSearchBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSearchBlueprintRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "search_info", kind: "message", T: () => exports.HomeBlueprintSearchInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.HomeBlueprintSearchInfo search_info */ 8:
                    message.searchInfo = exports.HomeBlueprintSearchInfo.internalBinaryRead(reader, reader.uint32(), options, message.searchInfo);
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
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.HomeBlueprintSearchInfo search_info = 8; */
        if (message.searchInfo)
            exports.HomeBlueprintSearchInfo.internalBinaryWrite(message.searchInfo, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSearchBlueprintRsp
 */
exports.HomeSearchBlueprintRsp = new HomeSearchBlueprintRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSaveArrangementNoChangeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSaveArrangementNoChangeReq", [
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSaveArrangementNoChangeReq
 */
exports.HomeSaveArrangementNoChangeReq = new HomeSaveArrangementNoChangeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeSaveArrangementNoChangeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeSaveArrangementNoChangeRsp", [
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
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
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeSaveArrangementNoChangeRsp
 */
exports.HomeSaveArrangementNoChangeRsp = new HomeSaveArrangementNoChangeRsp$Type();
