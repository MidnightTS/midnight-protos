"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEquipLockStateReq_CmdId = exports.DestroyMaterialRsp_CmdId = exports.DestroyMaterialReq_CmdId = exports.McoinExchangeHcoinRsp_CmdId = exports.McoinExchangeHcoinReq_CmdId = exports.MaterialDeleteUpdateNotify_CmdId = exports.TakeMaterialDeleteReturnRsp_CmdId = exports.TakeMaterialDeleteReturnReq_CmdId = exports.MaterialDeleteReturnNotify_CmdId = exports.BuyResinRsp_CmdId = exports.BuyResinReq_CmdId = exports.ResinChangeNotify_CmdId = exports.ForgeQueueManipulateRsp_CmdId = exports.ForgeQueueManipulateReq_CmdId = exports.ForgeStartRsp_CmdId = exports.ForgeStartReq_CmdId = exports.ForgeGetQueueDataRsp_CmdId = exports.ForgeGetQueueDataReq_CmdId = exports.ForgeQueueDataNotify_CmdId = exports.CombineRsp_CmdId = exports.CombineReq_CmdId = exports.DropHintNotify_CmdId = exports.ItemCdGroupTimeNotify_CmdId = exports.WeaponAwakenRsp_CmdId = exports.WeaponAwakenReq_CmdId = exports.GrantRewardNotify_CmdId = exports.AvatarCardChangeRsp_CmdId = exports.AvatarCardChangeReq_CmdId = exports.ReliquaryPromoteRsp_CmdId = exports.ReliquaryPromoteReq_CmdId = exports.ReliquaryUpgradeRsp_CmdId = exports.ReliquaryUpgradeReq_CmdId = exports.WeaponPromoteRsp_CmdId = exports.WeaponPromoteReq_CmdId = exports.WeaponUpgradeRsp_CmdId = exports.WeaponUpgradeReq_CmdId = exports.AvatarEquipChangeNotify_CmdId = exports.TakeoffEquipRsp_CmdId = exports.TakeoffEquipReq_CmdId = exports.WearEquipRsp_CmdId = exports.WearEquipReq_CmdId = exports.DropItemRsp_CmdId = exports.DropItemReq_CmdId = exports.UseItemRsp_CmdId = exports.UseItemReq_CmdId = exports.ItemAddHintNotify_CmdId = exports.StoreItemDelNotify_CmdId = exports.StoreItemChangeNotify_CmdId = exports.StoreWeightLimitNotify_CmdId = exports.PlayerStoreNotify_CmdId = void 0;
exports.ForgeQueueDataNotify = exports.ForgeQueueData = exports.CombineRsp = exports.CombineReq = exports.DropHintNotify = exports.ItemCdGroupTimeNotify = exports.WeaponAwakenRsp = exports.WeaponAwakenReq = exports.GrantRewardNotify = exports.AvatarCardChangeRsp = exports.AvatarCardChangeReq = exports.ReliquaryPromoteRsp = exports.ReliquaryPromoteReq = exports.ReliquaryUpgradeRsp = exports.ReliquaryUpgradeReq = exports.WeaponPromoteRsp = exports.WeaponPromoteReq = exports.WeaponUpgradeRsp = exports.WeaponUpgradeReq = exports.AvatarEquipChangeNotify = exports.TakeoffEquipRsp = exports.TakeoffEquipReq = exports.WearEquipRsp = exports.WearEquipReq = exports.DropItemRsp = exports.DropItemReq = exports.UseItemRsp = exports.UseItemReq = exports.ItemAddHintNotify = exports.ItemHint = exports.StoreItemDelNotify = exports.StoreItemChangeNotify = exports.StoreWeightLimitNotify = exports.PlayerStoreNotify = exports.MaterialDeleteReturnType = exports.ForgeQueueManipulateType = exports.ReliquaryDecomposeRsp_CmdId = exports.ReliquaryDecomposeReq_CmdId = exports.SetIsAutoUnlockSpecificEquipRsp_CmdId = exports.SetIsAutoUnlockSpecificEquipReq_CmdId = exports.CheckAddItemExceedLimitNotify_CmdId = exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = exports.ClosedItemNotify_CmdId = exports.CombineFormulaDataNotify_CmdId = exports.CombineDataNotify_CmdId = exports.ForgeFormulaDataNotify_CmdId = exports.ForgeDataNotify_CmdId = exports.CalcWeaponUpgradeReturnItemsRsp_CmdId = exports.CalcWeaponUpgradeReturnItemsReq_CmdId = exports.SetEquipLockStateRsp_CmdId = void 0;
exports.ReliquaryDecomposeRsp = exports.ReliquaryDecomposeReq = exports.SetIsAutoUnlockSpecificEquipRsp = exports.SetIsAutoUnlockSpecificEquipReq = exports.CheckAddItemExceedLimitNotify = exports.ClosedItemNotify = exports.CombineFormulaDataNotify = exports.CombineDataNotify = exports.ForgeFormulaDataNotify = exports.ForgeDataNotify = exports.CalcWeaponUpgradeReturnItemsRsp = exports.CalcWeaponUpgradeReturnItemsReq = exports.SetEquipLockStateRsp = exports.SetEquipLockStateReq = exports.DestroyMaterialRsp = exports.DestroyMaterialReq = exports.MaterilaInfo = exports.McoinExchangeHcoinRsp = exports.McoinExchangeHcoinReq = exports.MaterialDeleteUpdateNotify = exports.TakeMaterialDeleteReturnRsp = exports.TakeMaterialDeleteReturnReq = exports.MaterialDeleteReturnNotify = exports.BuyResinRsp = exports.BuyResinReq = exports.ResinChangeNotify = exports.ForgeQueueManipulateRsp = exports.ForgeQueueManipulateReq = exports.ForgeStartRsp = exports.ForgeStartReq = exports.ForgeGetQueueDataRsp = exports.ForgeGetQueueDataReq = void 0;
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
 * @generated from protobuf enum com.midnights.game.PlayerStoreNotify.CmdId
 */
var PlayerStoreNotify_CmdId;
(function (PlayerStoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 672;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["CMD_ID"] = 672] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerStoreNotify_CmdId[PlayerStoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerStoreNotify_CmdId = exports.PlayerStoreNotify_CmdId || (exports.PlayerStoreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreWeightLimitNotify.CmdId
 */
var StoreWeightLimitNotify_CmdId;
(function (StoreWeightLimitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 698;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["CMD_ID"] = 698] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreWeightLimitNotify_CmdId[StoreWeightLimitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StoreWeightLimitNotify_CmdId = exports.StoreWeightLimitNotify_CmdId || (exports.StoreWeightLimitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreItemChangeNotify.CmdId
 */
var StoreItemChangeNotify_CmdId;
(function (StoreItemChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreItemChangeNotify_CmdId[StoreItemChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 612;
     */
    StoreItemChangeNotify_CmdId[StoreItemChangeNotify_CmdId["CMD_ID"] = 612] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreItemChangeNotify_CmdId[StoreItemChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreItemChangeNotify_CmdId[StoreItemChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StoreItemChangeNotify_CmdId = exports.StoreItemChangeNotify_CmdId || (exports.StoreItemChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreItemDelNotify.CmdId
 */
var StoreItemDelNotify_CmdId;
(function (StoreItemDelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreItemDelNotify_CmdId[StoreItemDelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 635;
     */
    StoreItemDelNotify_CmdId[StoreItemDelNotify_CmdId["CMD_ID"] = 635] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreItemDelNotify_CmdId[StoreItemDelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreItemDelNotify_CmdId[StoreItemDelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StoreItemDelNotify_CmdId = exports.StoreItemDelNotify_CmdId || (exports.StoreItemDelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ItemAddHintNotify.CmdId
 */
var ItemAddHintNotify_CmdId;
(function (ItemAddHintNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemAddHintNotify_CmdId[ItemAddHintNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 607;
     */
    ItemAddHintNotify_CmdId[ItemAddHintNotify_CmdId["CMD_ID"] = 607] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemAddHintNotify_CmdId[ItemAddHintNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ItemAddHintNotify_CmdId[ItemAddHintNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ItemAddHintNotify_CmdId = exports.ItemAddHintNotify_CmdId || (exports.ItemAddHintNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseItemReq.CmdId
 */
var UseItemReq_CmdId;
(function (UseItemReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseItemReq_CmdId[UseItemReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 690;
     */
    UseItemReq_CmdId[UseItemReq_CmdId["CMD_ID"] = 690] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseItemReq_CmdId[UseItemReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseItemReq_CmdId[UseItemReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseItemReq_CmdId[UseItemReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UseItemReq_CmdId = exports.UseItemReq_CmdId || (exports.UseItemReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseItemRsp.CmdId
 */
var UseItemRsp_CmdId;
(function (UseItemRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseItemRsp_CmdId[UseItemRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 673;
     */
    UseItemRsp_CmdId[UseItemRsp_CmdId["CMD_ID"] = 673] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseItemRsp_CmdId[UseItemRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseItemRsp_CmdId[UseItemRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UseItemRsp_CmdId = exports.UseItemRsp_CmdId || (exports.UseItemRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DropItemReq.CmdId
 */
var DropItemReq_CmdId;
(function (DropItemReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropItemReq_CmdId[DropItemReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 699;
     */
    DropItemReq_CmdId[DropItemReq_CmdId["CMD_ID"] = 699] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropItemReq_CmdId[DropItemReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DropItemReq_CmdId[DropItemReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DropItemReq_CmdId[DropItemReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DropItemReq_CmdId = exports.DropItemReq_CmdId || (exports.DropItemReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DropItemRsp.CmdId
 */
var DropItemRsp_CmdId;
(function (DropItemRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropItemRsp_CmdId[DropItemRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 631;
     */
    DropItemRsp_CmdId[DropItemRsp_CmdId["CMD_ID"] = 631] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropItemRsp_CmdId[DropItemRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DropItemRsp_CmdId[DropItemRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DropItemRsp_CmdId = exports.DropItemRsp_CmdId || (exports.DropItemRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WearEquipReq.CmdId
 */
var WearEquipReq_CmdId;
(function (WearEquipReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WearEquipReq_CmdId[WearEquipReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 697;
     */
    WearEquipReq_CmdId[WearEquipReq_CmdId["CMD_ID"] = 697] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WearEquipReq_CmdId[WearEquipReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WearEquipReq_CmdId[WearEquipReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WearEquipReq_CmdId[WearEquipReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WearEquipReq_CmdId = exports.WearEquipReq_CmdId || (exports.WearEquipReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WearEquipRsp.CmdId
 */
var WearEquipRsp_CmdId;
(function (WearEquipRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WearEquipRsp_CmdId[WearEquipRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 681;
     */
    WearEquipRsp_CmdId[WearEquipRsp_CmdId["CMD_ID"] = 681] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WearEquipRsp_CmdId[WearEquipRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WearEquipRsp_CmdId[WearEquipRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WearEquipRsp_CmdId = exports.WearEquipRsp_CmdId || (exports.WearEquipRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeoffEquipReq.CmdId
 */
var TakeoffEquipReq_CmdId;
(function (TakeoffEquipReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeoffEquipReq_CmdId[TakeoffEquipReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 605;
     */
    TakeoffEquipReq_CmdId[TakeoffEquipReq_CmdId["CMD_ID"] = 605] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeoffEquipReq_CmdId[TakeoffEquipReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeoffEquipReq_CmdId[TakeoffEquipReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeoffEquipReq_CmdId[TakeoffEquipReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeoffEquipReq_CmdId = exports.TakeoffEquipReq_CmdId || (exports.TakeoffEquipReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeoffEquipRsp.CmdId
 */
var TakeoffEquipRsp_CmdId;
(function (TakeoffEquipRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeoffEquipRsp_CmdId[TakeoffEquipRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 682;
     */
    TakeoffEquipRsp_CmdId[TakeoffEquipRsp_CmdId["CMD_ID"] = 682] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeoffEquipRsp_CmdId[TakeoffEquipRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeoffEquipRsp_CmdId[TakeoffEquipRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeoffEquipRsp_CmdId = exports.TakeoffEquipRsp_CmdId || (exports.TakeoffEquipRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarEquipChangeNotify.CmdId
 */
var AvatarEquipChangeNotify_CmdId;
(function (AvatarEquipChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEquipChangeNotify_CmdId[AvatarEquipChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 647;
     */
    AvatarEquipChangeNotify_CmdId[AvatarEquipChangeNotify_CmdId["CMD_ID"] = 647] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEquipChangeNotify_CmdId[AvatarEquipChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarEquipChangeNotify_CmdId[AvatarEquipChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarEquipChangeNotify_CmdId[AvatarEquipChangeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarEquipChangeNotify_CmdId = exports.AvatarEquipChangeNotify_CmdId || (exports.AvatarEquipChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponUpgradeReq.CmdId
 */
var WeaponUpgradeReq_CmdId;
(function (WeaponUpgradeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponUpgradeReq_CmdId[WeaponUpgradeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 639;
     */
    WeaponUpgradeReq_CmdId[WeaponUpgradeReq_CmdId["CMD_ID"] = 639] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponUpgradeReq_CmdId[WeaponUpgradeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponUpgradeReq_CmdId[WeaponUpgradeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponUpgradeReq_CmdId[WeaponUpgradeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WeaponUpgradeReq_CmdId = exports.WeaponUpgradeReq_CmdId || (exports.WeaponUpgradeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponUpgradeRsp.CmdId
 */
var WeaponUpgradeRsp_CmdId;
(function (WeaponUpgradeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponUpgradeRsp_CmdId[WeaponUpgradeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 653;
     */
    WeaponUpgradeRsp_CmdId[WeaponUpgradeRsp_CmdId["CMD_ID"] = 653] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponUpgradeRsp_CmdId[WeaponUpgradeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponUpgradeRsp_CmdId[WeaponUpgradeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WeaponUpgradeRsp_CmdId = exports.WeaponUpgradeRsp_CmdId || (exports.WeaponUpgradeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponPromoteReq.CmdId
 */
var WeaponPromoteReq_CmdId;
(function (WeaponPromoteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponPromoteReq_CmdId[WeaponPromoteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 622;
     */
    WeaponPromoteReq_CmdId[WeaponPromoteReq_CmdId["CMD_ID"] = 622] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponPromoteReq_CmdId[WeaponPromoteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponPromoteReq_CmdId[WeaponPromoteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponPromoteReq_CmdId[WeaponPromoteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WeaponPromoteReq_CmdId = exports.WeaponPromoteReq_CmdId || (exports.WeaponPromoteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponPromoteRsp.CmdId
 */
var WeaponPromoteRsp_CmdId;
(function (WeaponPromoteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponPromoteRsp_CmdId[WeaponPromoteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 665;
     */
    WeaponPromoteRsp_CmdId[WeaponPromoteRsp_CmdId["CMD_ID"] = 665] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponPromoteRsp_CmdId[WeaponPromoteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponPromoteRsp_CmdId[WeaponPromoteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WeaponPromoteRsp_CmdId = exports.WeaponPromoteRsp_CmdId || (exports.WeaponPromoteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryUpgradeReq.CmdId
 */
var ReliquaryUpgradeReq_CmdId;
(function (ReliquaryUpgradeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryUpgradeReq_CmdId[ReliquaryUpgradeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 604;
     */
    ReliquaryUpgradeReq_CmdId[ReliquaryUpgradeReq_CmdId["CMD_ID"] = 604] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryUpgradeReq_CmdId[ReliquaryUpgradeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryUpgradeReq_CmdId[ReliquaryUpgradeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryUpgradeReq_CmdId[ReliquaryUpgradeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReliquaryUpgradeReq_CmdId = exports.ReliquaryUpgradeReq_CmdId || (exports.ReliquaryUpgradeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryUpgradeRsp.CmdId
 */
var ReliquaryUpgradeRsp_CmdId;
(function (ReliquaryUpgradeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryUpgradeRsp_CmdId[ReliquaryUpgradeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 693;
     */
    ReliquaryUpgradeRsp_CmdId[ReliquaryUpgradeRsp_CmdId["CMD_ID"] = 693] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryUpgradeRsp_CmdId[ReliquaryUpgradeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryUpgradeRsp_CmdId[ReliquaryUpgradeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReliquaryUpgradeRsp_CmdId = exports.ReliquaryUpgradeRsp_CmdId || (exports.ReliquaryUpgradeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryPromoteReq.CmdId
 */
var ReliquaryPromoteReq_CmdId;
(function (ReliquaryPromoteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryPromoteReq_CmdId[ReliquaryPromoteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 627;
     */
    ReliquaryPromoteReq_CmdId[ReliquaryPromoteReq_CmdId["CMD_ID"] = 627] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryPromoteReq_CmdId[ReliquaryPromoteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryPromoteReq_CmdId[ReliquaryPromoteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryPromoteReq_CmdId[ReliquaryPromoteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReliquaryPromoteReq_CmdId = exports.ReliquaryPromoteReq_CmdId || (exports.ReliquaryPromoteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryPromoteRsp.CmdId
 */
var ReliquaryPromoteRsp_CmdId;
(function (ReliquaryPromoteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryPromoteRsp_CmdId[ReliquaryPromoteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 694;
     */
    ReliquaryPromoteRsp_CmdId[ReliquaryPromoteRsp_CmdId["CMD_ID"] = 694] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryPromoteRsp_CmdId[ReliquaryPromoteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryPromoteRsp_CmdId[ReliquaryPromoteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReliquaryPromoteRsp_CmdId = exports.ReliquaryPromoteRsp_CmdId || (exports.ReliquaryPromoteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarCardChangeReq.CmdId
 */
var AvatarCardChangeReq_CmdId;
(function (AvatarCardChangeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarCardChangeReq_CmdId[AvatarCardChangeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 688;
     */
    AvatarCardChangeReq_CmdId[AvatarCardChangeReq_CmdId["CMD_ID"] = 688] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarCardChangeReq_CmdId[AvatarCardChangeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarCardChangeReq_CmdId[AvatarCardChangeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarCardChangeReq_CmdId[AvatarCardChangeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarCardChangeReq_CmdId = exports.AvatarCardChangeReq_CmdId || (exports.AvatarCardChangeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarCardChangeRsp.CmdId
 */
var AvatarCardChangeRsp_CmdId;
(function (AvatarCardChangeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarCardChangeRsp_CmdId[AvatarCardChangeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 626;
     */
    AvatarCardChangeRsp_CmdId[AvatarCardChangeRsp_CmdId["CMD_ID"] = 626] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarCardChangeRsp_CmdId[AvatarCardChangeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarCardChangeRsp_CmdId[AvatarCardChangeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarCardChangeRsp_CmdId = exports.AvatarCardChangeRsp_CmdId || (exports.AvatarCardChangeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GrantRewardNotify.CmdId
 */
var GrantRewardNotify_CmdId;
(function (GrantRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GrantRewardNotify_CmdId[GrantRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 663;
     */
    GrantRewardNotify_CmdId[GrantRewardNotify_CmdId["CMD_ID"] = 663] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GrantRewardNotify_CmdId[GrantRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GrantRewardNotify_CmdId[GrantRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GrantRewardNotify_CmdId = exports.GrantRewardNotify_CmdId || (exports.GrantRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponAwakenReq.CmdId
 */
var WeaponAwakenReq_CmdId;
(function (WeaponAwakenReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponAwakenReq_CmdId[WeaponAwakenReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 695;
     */
    WeaponAwakenReq_CmdId[WeaponAwakenReq_CmdId["CMD_ID"] = 695] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponAwakenReq_CmdId[WeaponAwakenReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponAwakenReq_CmdId[WeaponAwakenReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponAwakenReq_CmdId[WeaponAwakenReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WeaponAwakenReq_CmdId = exports.WeaponAwakenReq_CmdId || (exports.WeaponAwakenReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WeaponAwakenRsp.CmdId
 */
var WeaponAwakenRsp_CmdId;
(function (WeaponAwakenRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponAwakenRsp_CmdId[WeaponAwakenRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 606;
     */
    WeaponAwakenRsp_CmdId[WeaponAwakenRsp_CmdId["CMD_ID"] = 606] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WeaponAwakenRsp_CmdId[WeaponAwakenRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WeaponAwakenRsp_CmdId[WeaponAwakenRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WeaponAwakenRsp_CmdId = exports.WeaponAwakenRsp_CmdId || (exports.WeaponAwakenRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ItemCdGroupTimeNotify.CmdId
 */
var ItemCdGroupTimeNotify_CmdId;
(function (ItemCdGroupTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemCdGroupTimeNotify_CmdId[ItemCdGroupTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 634;
     */
    ItemCdGroupTimeNotify_CmdId[ItemCdGroupTimeNotify_CmdId["CMD_ID"] = 634] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemCdGroupTimeNotify_CmdId[ItemCdGroupTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ItemCdGroupTimeNotify_CmdId[ItemCdGroupTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ItemCdGroupTimeNotify_CmdId = exports.ItemCdGroupTimeNotify_CmdId || (exports.ItemCdGroupTimeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DropHintNotify.CmdId
 */
var DropHintNotify_CmdId;
(function (DropHintNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropHintNotify_CmdId[DropHintNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 650;
     */
    DropHintNotify_CmdId[DropHintNotify_CmdId["CMD_ID"] = 650] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DropHintNotify_CmdId[DropHintNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DropHintNotify_CmdId[DropHintNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DropHintNotify_CmdId = exports.DropHintNotify_CmdId || (exports.DropHintNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombineReq.CmdId
 */
var CombineReq_CmdId;
(function (CombineReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineReq_CmdId[CombineReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 643;
     */
    CombineReq_CmdId[CombineReq_CmdId["CMD_ID"] = 643] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineReq_CmdId[CombineReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombineReq_CmdId[CombineReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombineReq_CmdId[CombineReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CombineReq_CmdId = exports.CombineReq_CmdId || (exports.CombineReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombineRsp.CmdId
 */
var CombineRsp_CmdId;
(function (CombineRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineRsp_CmdId[CombineRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 674;
     */
    CombineRsp_CmdId[CombineRsp_CmdId["CMD_ID"] = 674] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineRsp_CmdId[CombineRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombineRsp_CmdId[CombineRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CombineRsp_CmdId = exports.CombineRsp_CmdId || (exports.CombineRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeQueueDataNotify.CmdId
 */
var ForgeQueueDataNotify_CmdId;
(function (ForgeQueueDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueDataNotify_CmdId[ForgeQueueDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 676;
     */
    ForgeQueueDataNotify_CmdId[ForgeQueueDataNotify_CmdId["CMD_ID"] = 676] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueDataNotify_CmdId[ForgeQueueDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeQueueDataNotify_CmdId[ForgeQueueDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeQueueDataNotify_CmdId[ForgeQueueDataNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ForgeQueueDataNotify_CmdId = exports.ForgeQueueDataNotify_CmdId || (exports.ForgeQueueDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeGetQueueDataReq.CmdId
 */
var ForgeGetQueueDataReq_CmdId;
(function (ForgeGetQueueDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeGetQueueDataReq_CmdId[ForgeGetQueueDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 646;
     */
    ForgeGetQueueDataReq_CmdId[ForgeGetQueueDataReq_CmdId["CMD_ID"] = 646] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeGetQueueDataReq_CmdId[ForgeGetQueueDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeGetQueueDataReq_CmdId[ForgeGetQueueDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeGetQueueDataReq_CmdId[ForgeGetQueueDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ForgeGetQueueDataReq_CmdId = exports.ForgeGetQueueDataReq_CmdId || (exports.ForgeGetQueueDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeGetQueueDataRsp.CmdId
 */
var ForgeGetQueueDataRsp_CmdId;
(function (ForgeGetQueueDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeGetQueueDataRsp_CmdId[ForgeGetQueueDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 641;
     */
    ForgeGetQueueDataRsp_CmdId[ForgeGetQueueDataRsp_CmdId["CMD_ID"] = 641] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeGetQueueDataRsp_CmdId[ForgeGetQueueDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeGetQueueDataRsp_CmdId[ForgeGetQueueDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForgeGetQueueDataRsp_CmdId = exports.ForgeGetQueueDataRsp_CmdId || (exports.ForgeGetQueueDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeStartReq.CmdId
 */
var ForgeStartReq_CmdId;
(function (ForgeStartReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeStartReq_CmdId[ForgeStartReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 649;
     */
    ForgeStartReq_CmdId[ForgeStartReq_CmdId["CMD_ID"] = 649] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeStartReq_CmdId[ForgeStartReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeStartReq_CmdId[ForgeStartReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeStartReq_CmdId[ForgeStartReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ForgeStartReq_CmdId = exports.ForgeStartReq_CmdId || (exports.ForgeStartReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeStartRsp.CmdId
 */
var ForgeStartRsp_CmdId;
(function (ForgeStartRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeStartRsp_CmdId[ForgeStartRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 691;
     */
    ForgeStartRsp_CmdId[ForgeStartRsp_CmdId["CMD_ID"] = 691] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeStartRsp_CmdId[ForgeStartRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeStartRsp_CmdId[ForgeStartRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForgeStartRsp_CmdId = exports.ForgeStartRsp_CmdId || (exports.ForgeStartRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeQueueManipulateReq.CmdId
 */
var ForgeQueueManipulateReq_CmdId;
(function (ForgeQueueManipulateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueManipulateReq_CmdId[ForgeQueueManipulateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 624;
     */
    ForgeQueueManipulateReq_CmdId[ForgeQueueManipulateReq_CmdId["CMD_ID"] = 624] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueManipulateReq_CmdId[ForgeQueueManipulateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeQueueManipulateReq_CmdId[ForgeQueueManipulateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeQueueManipulateReq_CmdId[ForgeQueueManipulateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ForgeQueueManipulateReq_CmdId = exports.ForgeQueueManipulateReq_CmdId || (exports.ForgeQueueManipulateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeQueueManipulateRsp.CmdId
 */
var ForgeQueueManipulateRsp_CmdId;
(function (ForgeQueueManipulateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueManipulateRsp_CmdId[ForgeQueueManipulateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 656;
     */
    ForgeQueueManipulateRsp_CmdId[ForgeQueueManipulateRsp_CmdId["CMD_ID"] = 656] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeQueueManipulateRsp_CmdId[ForgeQueueManipulateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeQueueManipulateRsp_CmdId[ForgeQueueManipulateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForgeQueueManipulateRsp_CmdId = exports.ForgeQueueManipulateRsp_CmdId || (exports.ForgeQueueManipulateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ResinChangeNotify.CmdId
 */
var ResinChangeNotify_CmdId;
(function (ResinChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ResinChangeNotify_CmdId[ResinChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 642;
     */
    ResinChangeNotify_CmdId[ResinChangeNotify_CmdId["CMD_ID"] = 642] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ResinChangeNotify_CmdId[ResinChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ResinChangeNotify_CmdId[ResinChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ResinChangeNotify_CmdId = exports.ResinChangeNotify_CmdId || (exports.ResinChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyResinReq.CmdId
 */
var BuyResinReq_CmdId;
(function (BuyResinReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyResinReq_CmdId[BuyResinReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 602;
     */
    BuyResinReq_CmdId[BuyResinReq_CmdId["CMD_ID"] = 602] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyResinReq_CmdId[BuyResinReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyResinReq_CmdId[BuyResinReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyResinReq_CmdId[BuyResinReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BuyResinReq_CmdId = exports.BuyResinReq_CmdId || (exports.BuyResinReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyResinRsp.CmdId
 */
var BuyResinRsp_CmdId;
(function (BuyResinRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyResinRsp_CmdId[BuyResinRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 619;
     */
    BuyResinRsp_CmdId[BuyResinRsp_CmdId["CMD_ID"] = 619] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyResinRsp_CmdId[BuyResinRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyResinRsp_CmdId[BuyResinRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyResinRsp_CmdId[BuyResinRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BuyResinRsp_CmdId = exports.BuyResinRsp_CmdId || (exports.BuyResinRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MaterialDeleteReturnNotify.CmdId
 */
var MaterialDeleteReturnNotify_CmdId;
(function (MaterialDeleteReturnNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MaterialDeleteReturnNotify_CmdId[MaterialDeleteReturnNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 661;
     */
    MaterialDeleteReturnNotify_CmdId[MaterialDeleteReturnNotify_CmdId["CMD_ID"] = 661] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MaterialDeleteReturnNotify_CmdId[MaterialDeleteReturnNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MaterialDeleteReturnNotify_CmdId[MaterialDeleteReturnNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MaterialDeleteReturnNotify_CmdId = exports.MaterialDeleteReturnNotify_CmdId || (exports.MaterialDeleteReturnNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeMaterialDeleteReturnReq.CmdId
 */
var TakeMaterialDeleteReturnReq_CmdId;
(function (TakeMaterialDeleteReturnReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeMaterialDeleteReturnReq_CmdId[TakeMaterialDeleteReturnReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 629;
     */
    TakeMaterialDeleteReturnReq_CmdId[TakeMaterialDeleteReturnReq_CmdId["CMD_ID"] = 629] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeMaterialDeleteReturnReq_CmdId[TakeMaterialDeleteReturnReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeMaterialDeleteReturnReq_CmdId[TakeMaterialDeleteReturnReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeMaterialDeleteReturnReq_CmdId[TakeMaterialDeleteReturnReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeMaterialDeleteReturnReq_CmdId = exports.TakeMaterialDeleteReturnReq_CmdId || (exports.TakeMaterialDeleteReturnReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeMaterialDeleteReturnRsp.CmdId
 */
var TakeMaterialDeleteReturnRsp_CmdId;
(function (TakeMaterialDeleteReturnRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeMaterialDeleteReturnRsp_CmdId[TakeMaterialDeleteReturnRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 657;
     */
    TakeMaterialDeleteReturnRsp_CmdId[TakeMaterialDeleteReturnRsp_CmdId["CMD_ID"] = 657] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeMaterialDeleteReturnRsp_CmdId[TakeMaterialDeleteReturnRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeMaterialDeleteReturnRsp_CmdId[TakeMaterialDeleteReturnRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeMaterialDeleteReturnRsp_CmdId = exports.TakeMaterialDeleteReturnRsp_CmdId || (exports.TakeMaterialDeleteReturnRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MaterialDeleteUpdateNotify.CmdId
 */
var MaterialDeleteUpdateNotify_CmdId;
(function (MaterialDeleteUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MaterialDeleteUpdateNotify_CmdId[MaterialDeleteUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 700;
     */
    MaterialDeleteUpdateNotify_CmdId[MaterialDeleteUpdateNotify_CmdId["CMD_ID"] = 700] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MaterialDeleteUpdateNotify_CmdId[MaterialDeleteUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MaterialDeleteUpdateNotify_CmdId[MaterialDeleteUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MaterialDeleteUpdateNotify_CmdId = exports.MaterialDeleteUpdateNotify_CmdId || (exports.MaterialDeleteUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.McoinExchangeHcoinReq.CmdId
 */
var McoinExchangeHcoinReq_CmdId;
(function (McoinExchangeHcoinReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    McoinExchangeHcoinReq_CmdId[McoinExchangeHcoinReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 616;
     */
    McoinExchangeHcoinReq_CmdId[McoinExchangeHcoinReq_CmdId["CMD_ID"] = 616] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    McoinExchangeHcoinReq_CmdId[McoinExchangeHcoinReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    McoinExchangeHcoinReq_CmdId[McoinExchangeHcoinReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    McoinExchangeHcoinReq_CmdId[McoinExchangeHcoinReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(McoinExchangeHcoinReq_CmdId = exports.McoinExchangeHcoinReq_CmdId || (exports.McoinExchangeHcoinReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.McoinExchangeHcoinRsp.CmdId
 */
var McoinExchangeHcoinRsp_CmdId;
(function (McoinExchangeHcoinRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    McoinExchangeHcoinRsp_CmdId[McoinExchangeHcoinRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 687;
     */
    McoinExchangeHcoinRsp_CmdId[McoinExchangeHcoinRsp_CmdId["CMD_ID"] = 687] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    McoinExchangeHcoinRsp_CmdId[McoinExchangeHcoinRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    McoinExchangeHcoinRsp_CmdId[McoinExchangeHcoinRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(McoinExchangeHcoinRsp_CmdId = exports.McoinExchangeHcoinRsp_CmdId || (exports.McoinExchangeHcoinRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DestroyMaterialReq.CmdId
 */
var DestroyMaterialReq_CmdId;
(function (DestroyMaterialReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMaterialReq_CmdId[DestroyMaterialReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 640;
     */
    DestroyMaterialReq_CmdId[DestroyMaterialReq_CmdId["CMD_ID"] = 640] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMaterialReq_CmdId[DestroyMaterialReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DestroyMaterialReq_CmdId[DestroyMaterialReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DestroyMaterialReq_CmdId[DestroyMaterialReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DestroyMaterialReq_CmdId = exports.DestroyMaterialReq_CmdId || (exports.DestroyMaterialReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DestroyMaterialRsp.CmdId
 */
var DestroyMaterialRsp_CmdId;
(function (DestroyMaterialRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMaterialRsp_CmdId[DestroyMaterialRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 618;
     */
    DestroyMaterialRsp_CmdId[DestroyMaterialRsp_CmdId["CMD_ID"] = 618] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMaterialRsp_CmdId[DestroyMaterialRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DestroyMaterialRsp_CmdId[DestroyMaterialRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DestroyMaterialRsp_CmdId = exports.DestroyMaterialRsp_CmdId || (exports.DestroyMaterialRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetEquipLockStateReq.CmdId
 */
var SetEquipLockStateReq_CmdId;
(function (SetEquipLockStateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEquipLockStateReq_CmdId[SetEquipLockStateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 666;
     */
    SetEquipLockStateReq_CmdId[SetEquipLockStateReq_CmdId["CMD_ID"] = 666] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEquipLockStateReq_CmdId[SetEquipLockStateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetEquipLockStateReq_CmdId[SetEquipLockStateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetEquipLockStateReq_CmdId[SetEquipLockStateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetEquipLockStateReq_CmdId = exports.SetEquipLockStateReq_CmdId || (exports.SetEquipLockStateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetEquipLockStateRsp.CmdId
 */
var SetEquipLockStateRsp_CmdId;
(function (SetEquipLockStateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEquipLockStateRsp_CmdId[SetEquipLockStateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 668;
     */
    SetEquipLockStateRsp_CmdId[SetEquipLockStateRsp_CmdId["CMD_ID"] = 668] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEquipLockStateRsp_CmdId[SetEquipLockStateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetEquipLockStateRsp_CmdId[SetEquipLockStateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetEquipLockStateRsp_CmdId = exports.SetEquipLockStateRsp_CmdId || (exports.SetEquipLockStateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CalcWeaponUpgradeReturnItemsReq.CmdId
 */
var CalcWeaponUpgradeReturnItemsReq_CmdId;
(function (CalcWeaponUpgradeReturnItemsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CalcWeaponUpgradeReturnItemsReq_CmdId[CalcWeaponUpgradeReturnItemsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 633;
     */
    CalcWeaponUpgradeReturnItemsReq_CmdId[CalcWeaponUpgradeReturnItemsReq_CmdId["CMD_ID"] = 633] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CalcWeaponUpgradeReturnItemsReq_CmdId[CalcWeaponUpgradeReturnItemsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CalcWeaponUpgradeReturnItemsReq_CmdId[CalcWeaponUpgradeReturnItemsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CalcWeaponUpgradeReturnItemsReq_CmdId[CalcWeaponUpgradeReturnItemsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CalcWeaponUpgradeReturnItemsReq_CmdId = exports.CalcWeaponUpgradeReturnItemsReq_CmdId || (exports.CalcWeaponUpgradeReturnItemsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CalcWeaponUpgradeReturnItemsRsp.CmdId
 */
var CalcWeaponUpgradeReturnItemsRsp_CmdId;
(function (CalcWeaponUpgradeReturnItemsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CalcWeaponUpgradeReturnItemsRsp_CmdId[CalcWeaponUpgradeReturnItemsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 684;
     */
    CalcWeaponUpgradeReturnItemsRsp_CmdId[CalcWeaponUpgradeReturnItemsRsp_CmdId["CMD_ID"] = 684] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CalcWeaponUpgradeReturnItemsRsp_CmdId[CalcWeaponUpgradeReturnItemsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CalcWeaponUpgradeReturnItemsRsp_CmdId[CalcWeaponUpgradeReturnItemsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CalcWeaponUpgradeReturnItemsRsp_CmdId = exports.CalcWeaponUpgradeReturnItemsRsp_CmdId || (exports.CalcWeaponUpgradeReturnItemsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeDataNotify.CmdId
 */
var ForgeDataNotify_CmdId;
(function (ForgeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeDataNotify_CmdId[ForgeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 680;
     */
    ForgeDataNotify_CmdId[ForgeDataNotify_CmdId["CMD_ID"] = 680] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeDataNotify_CmdId[ForgeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeDataNotify_CmdId[ForgeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForgeDataNotify_CmdId = exports.ForgeDataNotify_CmdId || (exports.ForgeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeFormulaDataNotify.CmdId
 */
var ForgeFormulaDataNotify_CmdId;
(function (ForgeFormulaDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeFormulaDataNotify_CmdId[ForgeFormulaDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 689;
     */
    ForgeFormulaDataNotify_CmdId[ForgeFormulaDataNotify_CmdId["CMD_ID"] = 689] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForgeFormulaDataNotify_CmdId[ForgeFormulaDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForgeFormulaDataNotify_CmdId[ForgeFormulaDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForgeFormulaDataNotify_CmdId = exports.ForgeFormulaDataNotify_CmdId || (exports.ForgeFormulaDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombineDataNotify.CmdId
 */
var CombineDataNotify_CmdId;
(function (CombineDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineDataNotify_CmdId[CombineDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 659;
     */
    CombineDataNotify_CmdId[CombineDataNotify_CmdId["CMD_ID"] = 659] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineDataNotify_CmdId[CombineDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombineDataNotify_CmdId[CombineDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CombineDataNotify_CmdId = exports.CombineDataNotify_CmdId || (exports.CombineDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombineFormulaDataNotify.CmdId
 */
var CombineFormulaDataNotify_CmdId;
(function (CombineFormulaDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineFormulaDataNotify_CmdId[CombineFormulaDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 632;
     */
    CombineFormulaDataNotify_CmdId[CombineFormulaDataNotify_CmdId["CMD_ID"] = 632] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombineFormulaDataNotify_CmdId[CombineFormulaDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombineFormulaDataNotify_CmdId[CombineFormulaDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CombineFormulaDataNotify_CmdId = exports.CombineFormulaDataNotify_CmdId || (exports.CombineFormulaDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClosedItemNotify.CmdId
 */
var ClosedItemNotify_CmdId;
(function (ClosedItemNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClosedItemNotify_CmdId[ClosedItemNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 614;
     */
    ClosedItemNotify_CmdId[ClosedItemNotify_CmdId["CMD_ID"] = 614] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClosedItemNotify_CmdId[ClosedItemNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClosedItemNotify_CmdId[ClosedItemNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ClosedItemNotify_CmdId = exports.ClosedItemNotify_CmdId || (exports.ClosedItemNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType
 */
var CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType;
(function (CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType) {
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_DEFAULT = 0;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["ITEM_EXCEED_LIMIT_MSG_DEFAULT"] = 0] = "ITEM_EXCEED_LIMIT_MSG_DEFAULT";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TEXT = 1;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["ITEM_EXCEED_LIMIT_MSG_TEXT"] = 1] = "ITEM_EXCEED_LIMIT_MSG_TEXT";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_DIALOG = 2;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["ITEM_EXCEED_LIMIT_MSG_DIALOG"] = 2] = "ITEM_EXCEED_LIMIT_MSG_DIALOG";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_DIALOG_NONBLOCK = 3;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["ITEM_EXCEED_LIMIT_MSG_DIALOG_NONBLOCK"] = 3] = "ITEM_EXCEED_LIMIT_MSG_DIALOG_NONBLOCK";
})(CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType || (exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckAddItemExceedLimitNotify.CmdId
 */
var CheckAddItemExceedLimitNotify_CmdId;
(function (CheckAddItemExceedLimitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckAddItemExceedLimitNotify_CmdId[CheckAddItemExceedLimitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 692;
     */
    CheckAddItemExceedLimitNotify_CmdId[CheckAddItemExceedLimitNotify_CmdId["CMD_ID"] = 692] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckAddItemExceedLimitNotify_CmdId[CheckAddItemExceedLimitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckAddItemExceedLimitNotify_CmdId[CheckAddItemExceedLimitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CheckAddItemExceedLimitNotify_CmdId = exports.CheckAddItemExceedLimitNotify_CmdId || (exports.CheckAddItemExceedLimitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetIsAutoUnlockSpecificEquipReq.CmdId
 */
var SetIsAutoUnlockSpecificEquipReq_CmdId;
(function (SetIsAutoUnlockSpecificEquipReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetIsAutoUnlockSpecificEquipReq_CmdId[SetIsAutoUnlockSpecificEquipReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 620;
     */
    SetIsAutoUnlockSpecificEquipReq_CmdId[SetIsAutoUnlockSpecificEquipReq_CmdId["CMD_ID"] = 620] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetIsAutoUnlockSpecificEquipReq_CmdId[SetIsAutoUnlockSpecificEquipReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetIsAutoUnlockSpecificEquipReq_CmdId[SetIsAutoUnlockSpecificEquipReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetIsAutoUnlockSpecificEquipReq_CmdId[SetIsAutoUnlockSpecificEquipReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetIsAutoUnlockSpecificEquipReq_CmdId = exports.SetIsAutoUnlockSpecificEquipReq_CmdId || (exports.SetIsAutoUnlockSpecificEquipReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetIsAutoUnlockSpecificEquipRsp.CmdId
 */
var SetIsAutoUnlockSpecificEquipRsp_CmdId;
(function (SetIsAutoUnlockSpecificEquipRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetIsAutoUnlockSpecificEquipRsp_CmdId[SetIsAutoUnlockSpecificEquipRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 664;
     */
    SetIsAutoUnlockSpecificEquipRsp_CmdId[SetIsAutoUnlockSpecificEquipRsp_CmdId["CMD_ID"] = 664] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetIsAutoUnlockSpecificEquipRsp_CmdId[SetIsAutoUnlockSpecificEquipRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetIsAutoUnlockSpecificEquipRsp_CmdId[SetIsAutoUnlockSpecificEquipRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetIsAutoUnlockSpecificEquipRsp_CmdId = exports.SetIsAutoUnlockSpecificEquipRsp_CmdId || (exports.SetIsAutoUnlockSpecificEquipRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryDecomposeReq.CmdId
 */
var ReliquaryDecomposeReq_CmdId;
(function (ReliquaryDecomposeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryDecomposeReq_CmdId[ReliquaryDecomposeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 638;
     */
    ReliquaryDecomposeReq_CmdId[ReliquaryDecomposeReq_CmdId["CMD_ID"] = 638] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryDecomposeReq_CmdId[ReliquaryDecomposeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryDecomposeReq_CmdId[ReliquaryDecomposeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryDecomposeReq_CmdId[ReliquaryDecomposeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReliquaryDecomposeReq_CmdId = exports.ReliquaryDecomposeReq_CmdId || (exports.ReliquaryDecomposeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReliquaryDecomposeRsp.CmdId
 */
var ReliquaryDecomposeRsp_CmdId;
(function (ReliquaryDecomposeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryDecomposeRsp_CmdId[ReliquaryDecomposeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 611;
     */
    ReliquaryDecomposeRsp_CmdId[ReliquaryDecomposeRsp_CmdId["CMD_ID"] = 611] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReliquaryDecomposeRsp_CmdId[ReliquaryDecomposeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryDecomposeRsp_CmdId[ReliquaryDecomposeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReliquaryDecomposeRsp_CmdId[ReliquaryDecomposeRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReliquaryDecomposeRsp_CmdId = exports.ReliquaryDecomposeRsp_CmdId || (exports.ReliquaryDecomposeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForgeQueueManipulateType
 */
var ForgeQueueManipulateType;
(function (ForgeQueueManipulateType) {
    /**
     * @generated from protobuf enum value: FORGE_QUEUE_MANIPULATE_TYPE_RECEIVE_OUTPUT = 0;
     */
    ForgeQueueManipulateType[ForgeQueueManipulateType["RECEIVE_OUTPUT"] = 0] = "RECEIVE_OUTPUT";
    /**
     * @generated from protobuf enum value: FORGE_QUEUE_MANIPULATE_TYPE_STOP_FORGE = 1;
     */
    ForgeQueueManipulateType[ForgeQueueManipulateType["STOP_FORGE"] = 1] = "STOP_FORGE";
})(ForgeQueueManipulateType = exports.ForgeQueueManipulateType || (exports.ForgeQueueManipulateType = {}));
/**
 * @generated from protobuf enum com.midnights.game.MaterialDeleteReturnType
 */
var MaterialDeleteReturnType;
(function (MaterialDeleteReturnType) {
    /**
     * @generated from protobuf enum value: MATERIAL_DELETE_RETURN_BAG = 0;
     */
    MaterialDeleteReturnType[MaterialDeleteReturnType["MATERIAL_DELETE_RETURN_BAG"] = 0] = "MATERIAL_DELETE_RETURN_BAG";
    /**
     * @generated from protobuf enum value: MATERIAL_DELETE_RETURN_SEED = 1;
     */
    MaterialDeleteReturnType[MaterialDeleteReturnType["MATERIAL_DELETE_RETURN_SEED"] = 1] = "MATERIAL_DELETE_RETURN_SEED";
})(MaterialDeleteReturnType = exports.MaterialDeleteReturnType || (exports.MaterialDeleteReturnType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerStoreNotify", [
            { no: 15, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_7.Item },
            { no: 8, name: "weight_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] }
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
                case /* repeated com.midnights.game.Item item_list */ 15:
                    message.itemList.push(define_7.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 weight_limit */ 8:
                    message.weightLimit = reader.uint32();
                    break;
                case /* optional com.midnights.game.StoreType store_type */ 2:
                    message.storeType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Item item_list = 15; */
        for (let i = 0; i < message.itemList.length; i++)
            define_7.Item.internalBinaryWrite(message.itemList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 weight_limit = 8; */
        if (message.weightLimit !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.weightLimit);
        /* optional com.midnights.game.StoreType store_type = 2; */
        if (message.storeType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.storeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerStoreNotify
 */
exports.PlayerStoreNotify = new PlayerStoreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreWeightLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StoreWeightLimitNotify", [
            { no: 2, name: "weapon_count_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] },
            { no: 4, name: "material_count_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reliquary_count_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "furniture_count_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "weight_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 weapon_count_limit */ 2:
                    message.weaponCountLimit = reader.uint32();
                    break;
                case /* optional com.midnights.game.StoreType store_type */ 7:
                    message.storeType = reader.int32();
                    break;
                case /* optional uint32 material_count_limit */ 4:
                    message.materialCountLimit = reader.uint32();
                    break;
                case /* optional uint32 reliquary_count_limit */ 6:
                    message.reliquaryCountLimit = reader.uint32();
                    break;
                case /* optional uint32 furniture_count_limit */ 9:
                    message.furnitureCountLimit = reader.uint32();
                    break;
                case /* optional uint32 weight_limit */ 15:
                    message.weightLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 weapon_count_limit = 2; */
        if (message.weaponCountLimit !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.weaponCountLimit);
        /* optional com.midnights.game.StoreType store_type = 7; */
        if (message.storeType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.storeType);
        /* optional uint32 material_count_limit = 4; */
        if (message.materialCountLimit !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.materialCountLimit);
        /* optional uint32 reliquary_count_limit = 6; */
        if (message.reliquaryCountLimit !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.reliquaryCountLimit);
        /* optional uint32 furniture_count_limit = 9; */
        if (message.furnitureCountLimit !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.furnitureCountLimit);
        /* optional uint32 weight_limit = 15; */
        if (message.weightLimit !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.weightLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StoreWeightLimitNotify
 */
exports.StoreWeightLimitNotify = new StoreWeightLimitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreItemChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StoreItemChangeNotify", [
            { no: 12, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] },
            { no: 10, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_7.Item }
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
                case /* optional com.midnights.game.StoreType store_type */ 12:
                    message.storeType = reader.int32();
                    break;
                case /* repeated com.midnights.game.Item item_list */ 10:
                    message.itemList.push(define_7.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.StoreType store_type = 12; */
        if (message.storeType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.storeType);
        /* repeated com.midnights.game.Item item_list = 10; */
        for (let i = 0; i < message.itemList.length; i++)
            define_7.Item.internalBinaryWrite(message.itemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StoreItemChangeNotify
 */
exports.StoreItemChangeNotify = new StoreItemChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreItemDelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StoreItemDelNotify", [
            { no: 12, name: "guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] }
        ]);
    }
    create(value) {
        const message = { guidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 guid_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.guidList.push(reader.uint64().toBigInt());
                    else
                        message.guidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional com.midnights.game.StoreType store_type */ 15:
                    message.storeType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 guid_list = 12; */
        for (let i = 0; i < message.guidList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.guidList[i]);
        /* optional com.midnights.game.StoreType store_type = 15; */
        if (message.storeType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.storeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StoreItemDelNotify
 */
exports.StoreItemDelNotify = new StoreItemDelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemHint$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemHint", [
            { no: 8, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_new", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 8:
                    message.itemId = reader.uint32();
                    break;
                case /* optional bool is_new */ 2:
                    message.isNew = reader.bool();
                    break;
                case /* optional uint32 count */ 15:
                    message.count = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 8; */
        if (message.itemId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional bool is_new = 2; */
        if (message.isNew !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isNew);
        /* optional uint32 count = 15; */
        if (message.count !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.count);
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
 * @generated MessageType for protobuf message com.midnights.game.ItemHint
 */
exports.ItemHint = new ItemHint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemAddHintNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemAddHintNotify", [
            { no: 14, name: "is_position_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reason", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_general_reward_hiden", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ItemHint },
            { no: 12, name: "is_transfered_from_avatar_card", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "position", kind: "message", T: () => define_5.Vector },
            { no: 8, name: "overflow_transformed_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ItemHint }
        ]);
    }
    create(value) {
        const message = { itemList: [], overflowTransformedItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_position_valid */ 14:
                    message.isPositionValid = reader.bool();
                    break;
                case /* optional uint32 quest_id */ 3:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 reason */ 6:
                    message.reason = reader.uint32();
                    break;
                case /* optional bool is_general_reward_hiden */ 15:
                    message.isGeneralRewardHiden = reader.bool();
                    break;
                case /* repeated com.midnights.game.ItemHint item_list */ 10:
                    message.itemList.push(exports.ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_transfered_from_avatar_card */ 12:
                    message.isTransferedFromAvatarCard = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector position */ 9:
                    message.position = define_5.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* repeated com.midnights.game.ItemHint overflow_transformed_item_list */ 8:
                    message.overflowTransformedItemList.push(exports.ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_position_valid = 14; */
        if (message.isPositionValid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isPositionValid);
        /* optional uint32 quest_id = 3; */
        if (message.questId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional uint32 reason = 6; */
        if (message.reason !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.reason);
        /* optional bool is_general_reward_hiden = 15; */
        if (message.isGeneralRewardHiden !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGeneralRewardHiden);
        /* repeated com.midnights.game.ItemHint item_list = 10; */
        for (let i = 0; i < message.itemList.length; i++)
            exports.ItemHint.internalBinaryWrite(message.itemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_transfered_from_avatar_card = 12; */
        if (message.isTransferedFromAvatarCard !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isTransferedFromAvatarCard);
        /* optional com.midnights.game.Vector position = 9; */
        if (message.position)
            define_5.Vector.internalBinaryWrite(message.position, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemHint overflow_transformed_item_list = 8; */
        for (let i = 0; i < message.overflowTransformedItemList.length; i++)
            exports.ItemHint.internalBinaryWrite(message.overflowTransformedItemList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ItemAddHintNotify
 */
exports.ItemAddHintNotify = new ItemAddHintNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseItemReq", [
            { no: 13, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "target_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "is_enter_mp_dungeon_team", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "option_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 count */ 13:
                    message.count = reader.uint32();
                    break;
                case /* optional uint64 target_guid */ 14:
                    message.targetGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 guid */ 10:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_enter_mp_dungeon_team */ 15:
                    message.isEnterMpDungeonTeam = reader.bool();
                    break;
                case /* optional uint32 option_idx */ 7:
                    message.optionIdx = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 count = 13; */
        if (message.count !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.count);
        /* optional uint64 target_guid = 14; */
        if (message.targetGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.targetGuid);
        /* optional uint64 guid = 10; */
        if (message.guid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional bool is_enter_mp_dungeon_team = 15; */
        if (message.isEnterMpDungeonTeam !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isEnterMpDungeonTeam);
        /* optional uint32 option_idx = 7; */
        if (message.optionIdx !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.optionIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UseItemReq
 */
exports.UseItemReq = new UseItemReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseItemRsp", [
            { no: 5, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "target_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "option_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint64 guid */ 5:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 target_guid */ 1:
                    message.targetGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 item_id */ 4:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint32 option_idx */ 8:
                    message.optionIdx = reader.uint32();
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
        /* optional uint64 guid = 5; */
        if (message.guid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional uint64 target_guid = 1; */
        if (message.targetGuid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.targetGuid);
        /* optional uint32 item_id = 4; */
        if (message.itemId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional uint32 option_idx = 8; */
        if (message.optionIdx !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.optionIdx);
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
 * @generated MessageType for protobuf message com.midnights.game.UseItemRsp
 */
exports.UseItemRsp = new UseItemRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DropItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DropItemReq", [
            { no: 11, name: "pos", kind: "message", T: () => define_5.Vector },
            { no: 1, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] },
            { no: 2, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 11:
                    message.pos = define_5.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.StoreType store_type */ 1:
                    message.storeType = reader.int32();
                    break;
                case /* optional uint32 count */ 2:
                    message.count = reader.uint32();
                    break;
                case /* optional uint64 guid */ 13:
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
        /* optional com.midnights.game.Vector pos = 11; */
        if (message.pos)
            define_5.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.StoreType store_type = 1; */
        if (message.storeType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.storeType);
        /* optional uint32 count = 2; */
        if (message.count !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.count);
        /* optional uint64 guid = 13; */
        if (message.guid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DropItemReq
 */
exports.DropItemReq = new DropItemReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DropItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DropItemRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "store_type", kind: "enum", opt: true, T: () => ["com.midnights.game.StoreType", define_6.StoreType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 guid */ 1:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.StoreType store_type */ 15:
                    message.storeType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint64 guid = 1; */
        if (message.guid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional com.midnights.game.StoreType store_type = 15; */
        if (message.storeType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.storeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DropItemRsp
 */
exports.DropItemRsp = new DropItemRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WearEquipReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WearEquipReq", [
            { no: 7, name: "equip_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 equip_guid */ 7:
                    message.equipGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 avatar_guid */ 5:
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
        /* optional uint64 equip_guid = 7; */
        if (message.equipGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.equipGuid);
        /* optional uint64 avatar_guid = 5; */
        if (message.avatarGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WearEquipReq
 */
exports.WearEquipReq = new WearEquipReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WearEquipRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WearEquipRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "equip_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
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
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 equip_guid */ 1:
                    message.equipGuid = reader.uint64().toBigInt();
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
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 equip_guid = 1; */
        if (message.equipGuid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.equipGuid);
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
 * @generated MessageType for protobuf message com.midnights.game.WearEquipRsp
 */
exports.WearEquipRsp = new WearEquipRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeoffEquipReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeoffEquipReq", [
            { no: 8, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "slot", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 8:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 slot */ 15:
                    message.slot = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 8; */
        if (message.avatarGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 slot = 15; */
        if (message.slot !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.slot);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeoffEquipReq
 */
exports.TakeoffEquipReq = new TakeoffEquipReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeoffEquipRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeoffEquipRsp", [
            { no: 9, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "slot", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 9:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 slot */ 10:
                    message.slot = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 9; */
        if (message.avatarGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 slot = 10; */
        if (message.slot !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.slot);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeoffEquipRsp
 */
exports.TakeoffEquipRsp = new TakeoffEquipRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarEquipChangeNotify", [
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "equip_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "reliquary", kind: "message", T: () => define_4.SceneReliquaryInfo },
            { no: 15, name: "weapon", kind: "message", T: () => define_3.SceneWeaponInfo },
            { no: 14, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "equip_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 equip_guid */ 13:
                    message.equipGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.SceneReliquaryInfo reliquary */ 1:
                    message.reliquary = define_4.SceneReliquaryInfo.internalBinaryRead(reader, reader.uint32(), options, message.reliquary);
                    break;
                case /* optional com.midnights.game.SceneWeaponInfo weapon */ 15:
                    message.weapon = define_3.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options, message.weapon);
                    break;
                case /* optional uint32 item_id */ 14:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint32 equip_type */ 8:
                    message.equipType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint64 equip_guid = 13; */
        if (message.equipGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.equipGuid);
        /* optional com.midnights.game.SceneReliquaryInfo reliquary = 1; */
        if (message.reliquary)
            define_4.SceneReliquaryInfo.internalBinaryWrite(message.reliquary, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.SceneWeaponInfo weapon = 15; */
        if (message.weapon)
            define_3.SceneWeaponInfo.internalBinaryWrite(message.weapon, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 item_id = 14; */
        if (message.itemId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional uint32 equip_type = 8; */
        if (message.equipType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.equipType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarEquipChangeNotify
 */
exports.AvatarEquipChangeNotify = new AvatarEquipChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponUpgradeReq", [
            { no: 1, name: "food_weapon_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 4, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { foodWeaponGuidList: [], itemParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 food_weapon_guid_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated com.midnights.game.ItemParam item_param_list */ 15:
                    message.itemParamList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 target_weapon_guid */ 4:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 food_weapon_guid_list = 1; */
        for (let i = 0; i < message.foodWeaponGuidList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.foodWeaponGuidList[i]);
        /* repeated com.midnights.game.ItemParam item_param_list = 15; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 target_weapon_guid = 4; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeaponUpgradeReq
 */
exports.WeaponUpgradeReq = new WeaponUpgradeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponUpgradeRsp", [
            { no: 7, name: "cur_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 6, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_level */ 7:
                    message.curLevel = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 old_level */ 8:
                    message.oldLevel = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_param_list */ 2:
                    message.itemParamList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 target_weapon_guid */ 6:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_level = 7; */
        if (message.curLevel !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 old_level = 8; */
        if (message.oldLevel !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* repeated com.midnights.game.ItemParam item_param_list = 2; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 target_weapon_guid = 6; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeaponUpgradeRsp
 */
exports.WeaponUpgradeRsp = new WeaponUpgradeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponPromoteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponPromoteReq", [
            { no: 5, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 target_weapon_guid */ 5:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 target_weapon_guid = 5; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeaponPromoteReq
 */
exports.WeaponPromoteReq = new WeaponPromoteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponPromoteRsp", [
            { no: 3, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "old_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cur_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint64 target_weapon_guid */ 3:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 old_promote_level */ 7:
                    message.oldPromoteLevel = reader.uint32();
                    break;
                case /* optional uint32 cur_promote_level */ 12:
                    message.curPromoteLevel = reader.uint32();
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
        /* optional uint64 target_weapon_guid = 3; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* optional uint32 old_promote_level = 7; */
        if (message.oldPromoteLevel !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.oldPromoteLevel);
        /* optional uint32 cur_promote_level = 12; */
        if (message.curPromoteLevel !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curPromoteLevel);
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
 * @generated MessageType for protobuf message com.midnights.game.WeaponPromoteRsp
 */
exports.WeaponPromoteRsp = new WeaponPromoteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryUpgradeReq", [
            { no: 11, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 6, name: "target_reliquary_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "food_reliquary_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemParamList: [], foodReliquaryGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam item_param_list */ 11:
                    message.itemParamList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 target_reliquary_guid */ 6:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint64 food_reliquary_guid_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodReliquaryGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodReliquaryGuidList.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ItemParam item_param_list = 11; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 target_reliquary_guid = 6; */
        if (message.targetReliquaryGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* repeated uint64 food_reliquary_guid_list = 12; */
        for (let i = 0; i < message.foodReliquaryGuidList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.foodReliquaryGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryUpgradeReq
 */
exports.ReliquaryUpgradeReq = new ReliquaryUpgradeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryUpgradeRsp", [
            { no: 4, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "cur_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "target_reliquary_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "cur_append_prop_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "power_up_rate", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "old_append_prop_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { curAppendPropList: [], oldAppendPropList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 old_level */ 4:
                    message.oldLevel = reader.uint32();
                    break;
                case /* optional uint32 cur_level */ 13:
                    message.curLevel = reader.uint32();
                    break;
                case /* optional uint64 target_reliquary_guid */ 9:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 cur_append_prop_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.curAppendPropList.push(reader.uint32());
                    else
                        message.curAppendPropList.push(reader.uint32());
                    break;
                case /* optional uint32 power_up_rate */ 6:
                    message.powerUpRate = reader.uint32();
                    break;
                case /* repeated uint32 old_append_prop_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.oldAppendPropList.push(reader.uint32());
                    else
                        message.oldAppendPropList.push(reader.uint32());
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
        /* optional uint32 old_level = 4; */
        if (message.oldLevel !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* optional uint32 cur_level = 13; */
        if (message.curLevel !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* optional uint64 target_reliquary_guid = 9; */
        if (message.targetReliquaryGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* repeated uint32 cur_append_prop_list = 2; */
        for (let i = 0; i < message.curAppendPropList.length; i++)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.curAppendPropList[i]);
        /* optional uint32 power_up_rate = 6; */
        if (message.powerUpRate !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.powerUpRate);
        /* repeated uint32 old_append_prop_list = 15; */
        for (let i = 0; i < message.oldAppendPropList.length; i++)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.oldAppendPropList[i]);
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
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryUpgradeRsp
 */
exports.ReliquaryUpgradeRsp = new ReliquaryUpgradeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryPromoteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryPromoteReq", [
            { no: 10, name: "item_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "target_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 item_guid */ 10:
                    message.itemGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 target_guid */ 13:
                    message.targetGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 item_guid = 10; */
        if (message.itemGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.itemGuid);
        /* optional uint64 target_guid = 13; */
        if (message.targetGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.targetGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryPromoteReq
 */
exports.ReliquaryPromoteReq = new ReliquaryPromoteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryPromoteRsp", [
            { no: 10, name: "old_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "target_reliquary_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "cur_append_prop_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "cur_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "old_append_prop_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curAppendPropList: [], oldAppendPropList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 old_promote_level */ 10:
                    message.oldPromoteLevel = reader.uint32();
                    break;
                case /* optional uint64 target_reliquary_guid */ 6:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 cur_append_prop_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.curAppendPropList.push(reader.uint32());
                    else
                        message.curAppendPropList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 cur_promote_level */ 2:
                    message.curPromoteLevel = reader.uint32();
                    break;
                case /* repeated uint32 old_append_prop_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.oldAppendPropList.push(reader.uint32());
                    else
                        message.oldAppendPropList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 old_promote_level = 10; */
        if (message.oldPromoteLevel !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.oldPromoteLevel);
        /* optional uint64 target_reliquary_guid = 6; */
        if (message.targetReliquaryGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* repeated uint32 cur_append_prop_list = 9; */
        for (let i = 0; i < message.curAppendPropList.length; i++)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curAppendPropList[i]);
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 cur_promote_level = 2; */
        if (message.curPromoteLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.curPromoteLevel);
        /* repeated uint32 old_append_prop_list = 8; */
        for (let i = 0; i < message.oldAppendPropList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.oldAppendPropList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryPromoteRsp
 */
exports.ReliquaryPromoteRsp = new ReliquaryPromoteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarCardChangeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarCardChangeReq", [
            { no: 6, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 6:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 14:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 count */ 7:
                    message.count = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 item_id = 6; */
        if (message.itemId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional uint64 avatar_guid = 14; */
        if (message.avatarGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 count = 7; */
        if (message.count !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarCardChangeReq
 */
exports.AvatarCardChangeReq = new AvatarCardChangeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarCardChangeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarCardChangeRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarCardChangeRsp
 */
exports.AvatarCardChangeRsp = new AvatarCardChangeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GrantRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GrantRewardNotify", [
            { no: 6, name: "reward", kind: "message", T: () => define_1.Reward }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Reward reward */ 6:
                    message.reward = define_1.Reward.internalBinaryRead(reader, reader.uint32(), options, message.reward);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Reward reward = 6; */
        if (message.reward)
            define_1.Reward.internalBinaryWrite(message.reward, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GrantRewardNotify
 */
exports.GrantRewardNotify = new GrantRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponAwakenReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponAwakenReq", [
            { no: 10, name: "item_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { affixLevelMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 item_guid */ 10:
                    message.itemGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> affix_level_map */ 7:
                    this.binaryReadMap7(message.affixLevelMap, reader, options);
                    break;
                case /* optional uint64 target_weapon_guid */ 9:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.WeaponAwakenReq.affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 item_guid = 10; */
        if (message.itemGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.itemGuid);
        /* map<uint32, uint32> affix_level_map = 7; */
        for (let k of Object.keys(message.affixLevelMap))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.affixLevelMap[k]).join();
        /* optional uint64 target_weapon_guid = 9; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeaponAwakenReq
 */
exports.WeaponAwakenReq = new WeaponAwakenReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WeaponAwakenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WeaponAwakenRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "old_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "target_weapon_awaken_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "cur_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { oldAffixLevelMap: {}, curAffixLevelMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> old_affix_level_map */ 4:
                    this.binaryReadMap4(message.oldAffixLevelMap, reader, options);
                    break;
                case /* optional uint32 target_weapon_awaken_level */ 2:
                    message.targetWeaponAwakenLevel = reader.uint32();
                    break;
                case /* optional uint64 target_weapon_guid */ 15:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> cur_affix_level_map */ 11:
                    this.binaryReadMap11(message.curAffixLevelMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.WeaponAwakenRsp.old_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.WeaponAwakenRsp.cur_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 avatar_guid = 10; */
        if (message.avatarGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* map<uint32, uint32> old_affix_level_map = 4; */
        for (let k of Object.keys(message.oldAffixLevelMap))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.oldAffixLevelMap[k]).join();
        /* optional uint32 target_weapon_awaken_level = 2; */
        if (message.targetWeaponAwakenLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.targetWeaponAwakenLevel);
        /* optional uint64 target_weapon_guid = 15; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* map<uint32, uint32> cur_affix_level_map = 11; */
        for (let k of Object.keys(message.curAffixLevelMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.curAffixLevelMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WeaponAwakenRsp
 */
exports.WeaponAwakenRsp = new WeaponAwakenRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemCdGroupTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemCdGroupTimeNotify", [
            { no: 9, name: "item_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ } }
        ]);
    }
    create(value) {
        const message = { itemCdMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint64> item_cd_map */ 9:
                    this.binaryReadMap9(message.itemCdMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint64().toBigInt();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ItemCdGroupTimeNotify.item_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0n;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint64> item_cd_map = 9; */
        for (let k of Object.keys(message.itemCdMap))
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint64(message.itemCdMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ItemCdGroupTimeNotify
 */
exports.ItemCdGroupTimeNotify = new ItemCdGroupTimeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DropHintNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DropHintNotify", [
            { no: 7, name: "position", kind: "message", T: () => define_5.Vector },
            { no: 14, name: "item_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector position */ 7:
                    message.position = define_5.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* repeated uint32 item_id_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemIdList.push(reader.uint32());
                    else
                        message.itemIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector position = 7; */
        if (message.position)
            define_5.Vector.internalBinaryWrite(message.position, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 item_id_list = 14; */
        for (let i = 0; i < message.itemIdList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.itemIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DropHintNotify
 */
exports.DropHintNotify = new DropHintNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombineReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombineReq", [
            { no: 12, name: "combine_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "combine_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 combine_count */ 12:
                    message.combineCount = reader.uint32();
                    break;
                case /* optional uint32 combine_id */ 9:
                    message.combineId = reader.uint32();
                    break;
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
        /* optional uint32 combine_count = 12; */
        if (message.combineCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.combineCount);
        /* optional uint32 combine_id = 9; */
        if (message.combineId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.combineId);
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
 * @generated MessageType for protobuf message com.midnights.game.CombineReq
 */
exports.CombineReq = new CombineReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombineRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombineRsp", [
            { no: 3, name: "cost_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "total_extra_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 11, name: "combine_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "total_random_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 2, name: "result_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 13, name: "combine_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "total_return_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { costItemList: [], totalExtraItemList: [], totalRandomItemList: [], resultItemList: [], totalReturnItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam cost_item_list */ 3:
                    message.costItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam total_extra_item_list */ 6:
                    message.totalExtraItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 combine_id */ 11:
                    message.combineId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam total_random_item_list */ 9:
                    message.totalRandomItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam result_item_list */ 2:
                    message.resultItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 combine_count */ 13:
                    message.combineCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam total_return_item_list */ 12:
                    message.totalReturnItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ItemParam cost_item_list = 3; */
        for (let i = 0; i < message.costItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ItemParam total_extra_item_list = 6; */
        for (let i = 0; i < message.totalExtraItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.totalExtraItemList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 combine_id = 11; */
        if (message.combineId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.combineId);
        /* repeated com.midnights.game.ItemParam total_random_item_list = 9; */
        for (let i = 0; i < message.totalRandomItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.totalRandomItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam result_item_list = 2; */
        for (let i = 0; i < message.resultItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.resultItemList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 combine_count = 13; */
        if (message.combineCount !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.combineCount);
        /* repeated com.midnights.game.ItemParam total_return_item_list = 12; */
        for (let i = 0; i < message.totalReturnItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.totalReturnItemList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.CombineRsp
 */
exports.CombineRsp = new CombineRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeQueueData", [
            { no: 13, name: "finish_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "total_finish_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "queue_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "unfinish_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "next_finish_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "forge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 finish_count */ 13:
                    message.finishCount = reader.uint32();
                    break;
                case /* optional uint32 total_finish_timestamp */ 14:
                    message.totalFinishTimestamp = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 7:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 queue_id */ 1:
                    message.queueId = reader.uint32();
                    break;
                case /* optional uint32 unfinish_count */ 10:
                    message.unfinishCount = reader.uint32();
                    break;
                case /* optional uint32 next_finish_timestamp */ 11:
                    message.nextFinishTimestamp = reader.uint32();
                    break;
                case /* optional uint32 forge_id */ 15:
                    message.forgeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 finish_count = 13; */
        if (message.finishCount !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.finishCount);
        /* optional uint32 total_finish_timestamp = 14; */
        if (message.totalFinishTimestamp !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.totalFinishTimestamp);
        /* optional uint32 avatar_id = 7; */
        if (message.avatarId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 queue_id = 1; */
        if (message.queueId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.queueId);
        /* optional uint32 unfinish_count = 10; */
        if (message.unfinishCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unfinishCount);
        /* optional uint32 next_finish_timestamp = 11; */
        if (message.nextFinishTimestamp !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.nextFinishTimestamp);
        /* optional uint32 forge_id = 15; */
        if (message.forgeId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.forgeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeQueueData
 */
exports.ForgeQueueData = new ForgeQueueData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeQueueDataNotify", [
            { no: 7, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ForgeQueueData } },
            { no: 6, name: "removed_forge_queue_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forgeQueueMap: {}, removedForgeQueueList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map */ 7:
                    this.binaryReadMap7(message.forgeQueueMap, reader, options);
                    break;
                case /* repeated uint32 removed_forge_queue_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removedForgeQueueList.push(reader.uint32());
                    else
                        message.removedForgeQueueList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ForgeQueueDataNotify.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? exports.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map = 7; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 removed_forge_queue_list = 6; */
        for (let i = 0; i < message.removedForgeQueueList.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.removedForgeQueueList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeQueueDataNotify
 */
exports.ForgeQueueDataNotify = new ForgeQueueDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeGetQueueDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeGetQueueDataReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ForgeGetQueueDataReq
 */
exports.ForgeGetQueueDataReq = new ForgeGetQueueDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeGetQueueDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeGetQueueDataRsp", [
            { no: 2, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ForgeQueueData } },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "max_queue_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forgeQueueMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map */ 2:
                    this.binaryReadMap2(message.forgeQueueMap, reader, options);
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 max_queue_num */ 6:
                    message.maxQueueNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ForgeGetQueueDataRsp.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? exports.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map = 2; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 max_queue_num = 6; */
        if (message.maxQueueNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.maxQueueNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeGetQueueDataRsp
 */
exports.ForgeGetQueueDataRsp = new ForgeGetQueueDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeStartReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeStartReq", [
            { no: 7, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "forge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "forge_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 forge_id */ 4:
                    message.forgeId = reader.uint32();
                    break;
                case /* optional uint32 forge_count */ 6:
                    message.forgeCount = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 forge_id = 4; */
        if (message.forgeId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.forgeId);
        /* optional uint32 forge_count = 6; */
        if (message.forgeCount !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.forgeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeStartReq
 */
exports.ForgeStartReq = new ForgeStartReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeStartRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeStartRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ForgeStartRsp
 */
exports.ForgeStartRsp = new ForgeStartRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueManipulateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeQueueManipulateReq", [
            { no: 5, name: "forge_queue_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "manipulate_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForgeQueueManipulateType", ForgeQueueManipulateType, "FORGE_QUEUE_MANIPULATE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 forge_queue_id */ 5:
                    message.forgeQueueId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForgeQueueManipulateType manipulate_type */ 13:
                    message.manipulateType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 forge_queue_id = 5; */
        if (message.forgeQueueId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.forgeQueueId);
        /* optional com.midnights.game.ForgeQueueManipulateType manipulate_type = 13; */
        if (message.manipulateType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.manipulateType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeQueueManipulateReq
 */
exports.ForgeQueueManipulateReq = new ForgeQueueManipulateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueManipulateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeQueueManipulateRsp", [
            { no: 4, name: "manipulate_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForgeQueueManipulateType", ForgeQueueManipulateType, "FORGE_QUEUE_MANIPULATE_TYPE_"] },
            { no: 13, name: "extra_output_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 10, name: "return_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "output_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam }
        ]);
    }
    create(value) {
        const message = { extraOutputItemList: [], returnItemList: [], outputItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForgeQueueManipulateType manipulate_type */ 4:
                    message.manipulateType = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam extra_output_item_list */ 13:
                    message.extraOutputItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam return_item_list */ 10:
                    message.returnItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam output_item_list */ 9:
                    message.outputItemList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForgeQueueManipulateType manipulate_type = 4; */
        if (message.manipulateType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.manipulateType);
        /* repeated com.midnights.game.ItemParam extra_output_item_list = 13; */
        for (let i = 0; i < message.extraOutputItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.extraOutputItemList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam return_item_list = 10; */
        for (let i = 0; i < message.returnItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.returnItemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ItemParam output_item_list = 9; */
        for (let i = 0; i < message.outputItemList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.outputItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeQueueManipulateRsp
 */
exports.ForgeQueueManipulateRsp = new ForgeQueueManipulateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResinChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ResinChangeNotify", [
            { no: 6, name: "next_add_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cur_buy_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cur_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 next_add_timestamp */ 6:
                    message.nextAddTimestamp = reader.uint32();
                    break;
                case /* optional uint32 cur_buy_count */ 4:
                    message.curBuyCount = reader.uint32();
                    break;
                case /* optional uint32 cur_value */ 12:
                    message.curValue = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 next_add_timestamp = 6; */
        if (message.nextAddTimestamp !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.nextAddTimestamp);
        /* optional uint32 cur_buy_count = 4; */
        if (message.curBuyCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.curBuyCount);
        /* optional uint32 cur_value = 12; */
        if (message.curValue !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ResinChangeNotify
 */
exports.ResinChangeNotify = new ResinChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyResinReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyResinReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.BuyResinReq
 */
exports.BuyResinReq = new BuyResinReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyResinRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyResinRsp", [
            { no: 10, name: "cur_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 cur_value */ 10:
                    message.curValue = reader.uint32();
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
        /* optional uint32 cur_value = 10; */
        if (message.curValue !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curValue);
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
 * @generated MessageType for protobuf message com.midnights.game.BuyResinRsp
 */
exports.BuyResinRsp = new BuyResinRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteReturnNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteReturnNotify", [
            { no: 5, name: "return_item_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.MaterialDeleteReturnType", MaterialDeleteReturnType] },
            { no: 6, name: "delete_material_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { returnItemMap: {}, deleteMaterialMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> return_item_map */ 5:
                    this.binaryReadMap5(message.returnItemMap, reader, options);
                    break;
                case /* optional com.midnights.game.MaterialDeleteReturnType type */ 8:
                    message.type = reader.int32();
                    break;
                case /* map<uint32, uint32> delete_material_map */ 6:
                    this.binaryReadMap6(message.deleteMaterialMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MaterialDeleteReturnNotify.return_item_map");
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MaterialDeleteReturnNotify.delete_material_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> return_item_map = 5; */
        for (let k of Object.keys(message.returnItemMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.returnItemMap[k]).join();
        /* optional com.midnights.game.MaterialDeleteReturnType type = 8; */
        if (message.type !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.type);
        /* map<uint32, uint32> delete_material_map = 6; */
        for (let k of Object.keys(message.deleteMaterialMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.deleteMaterialMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteReturnNotify
 */
exports.MaterialDeleteReturnNotify = new MaterialDeleteReturnNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeMaterialDeleteReturnReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeMaterialDeleteReturnReq", [
            { no: 8, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.MaterialDeleteReturnType", MaterialDeleteReturnType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.MaterialDeleteReturnType type */ 8:
                    message.type = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.MaterialDeleteReturnType type = 8; */
        if (message.type !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeMaterialDeleteReturnReq
 */
exports.TakeMaterialDeleteReturnReq = new TakeMaterialDeleteReturnReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeMaterialDeleteReturnRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeMaterialDeleteReturnRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.TakeMaterialDeleteReturnRsp
 */
exports.TakeMaterialDeleteReturnRsp = new TakeMaterialDeleteReturnRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterialDeleteUpdateNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.MaterialDeleteUpdateNotify
 */
exports.MaterialDeleteUpdateNotify = new MaterialDeleteUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class McoinExchangeHcoinReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.McoinExchangeHcoinReq", [
            { no: 5, name: "hcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "mcoin_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 hcoin */ 5:
                    message.hcoin = reader.uint32();
                    break;
                case /* optional uint32 mcoin_cost */ 1:
                    message.mcoinCost = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 hcoin = 5; */
        if (message.hcoin !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.hcoin);
        /* optional uint32 mcoin_cost = 1; */
        if (message.mcoinCost !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.mcoinCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.McoinExchangeHcoinReq
 */
exports.McoinExchangeHcoinReq = new McoinExchangeHcoinReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class McoinExchangeHcoinRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.McoinExchangeHcoinRsp", [
            { no: 8, name: "mcoin_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "hcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 mcoin_cost */ 8:
                    message.mcoinCost = reader.uint32();
                    break;
                case /* optional uint32 hcoin */ 7:
                    message.hcoin = reader.uint32();
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
        /* optional uint32 mcoin_cost = 8; */
        if (message.mcoinCost !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.mcoinCost);
        /* optional uint32 hcoin = 7; */
        if (message.hcoin !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.hcoin);
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
 * @generated MessageType for protobuf message com.midnights.game.McoinExchangeHcoinRsp
 */
exports.McoinExchangeHcoinRsp = new McoinExchangeHcoinRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterilaInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MaterilaInfo", [
            { no: 11, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 count */ 11:
                    message.count = reader.uint32();
                    break;
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
        /* optional uint32 count = 11; */
        if (message.count !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.count);
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
 * @generated MessageType for protobuf message com.midnights.game.MaterilaInfo
 */
exports.MaterilaInfo = new MaterilaInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DestroyMaterialReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DestroyMaterialReq", [
            { no: 5, name: "material_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.MaterilaInfo }
        ]);
    }
    create(value) {
        const message = { materialList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MaterilaInfo material_list */ 5:
                    message.materialList.push(exports.MaterilaInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.MaterilaInfo material_list = 5; */
        for (let i = 0; i < message.materialList.length; i++)
            exports.MaterilaInfo.internalBinaryWrite(message.materialList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DestroyMaterialReq
 */
exports.DestroyMaterialReq = new DestroyMaterialReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DestroyMaterialRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DestroyMaterialRsp", [
            { no: 12, name: "item_count_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "item_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { itemCountList: [], itemIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 item_count_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemCountList.push(reader.uint32());
                    else
                        message.itemCountList.push(reader.uint32());
                    break;
                case /* repeated uint32 item_id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemIdList.push(reader.uint32());
                    else
                        message.itemIdList.push(reader.uint32());
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 item_count_list = 12; */
        for (let i = 0; i < message.itemCountList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.itemCountList[i]);
        /* repeated uint32 item_id_list = 13; */
        for (let i = 0; i < message.itemIdList.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.itemIdList[i]);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DestroyMaterialRsp
 */
exports.DestroyMaterialRsp = new DestroyMaterialRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetEquipLockStateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetEquipLockStateReq", [
            { no: 15, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "target_equip_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_locked */ 15:
                    message.isLocked = reader.bool();
                    break;
                case /* optional uint64 target_equip_guid */ 9:
                    message.targetEquipGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_locked = 15; */
        if (message.isLocked !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isLocked);
        /* optional uint64 target_equip_guid = 9; */
        if (message.targetEquipGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.targetEquipGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetEquipLockStateReq
 */
exports.SetEquipLockStateReq = new SetEquipLockStateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetEquipLockStateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetEquipLockStateRsp", [
            { no: 14, name: "target_equip_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 target_equip_guid */ 14:
                    message.targetEquipGuid = reader.uint64().toBigInt();
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_locked */ 10:
                    message.isLocked = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 target_equip_guid = 14; */
        if (message.targetEquipGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.targetEquipGuid);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_locked = 10; */
        if (message.isLocked !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isLocked);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetEquipLockStateRsp
 */
exports.SetEquipLockStateRsp = new SetEquipLockStateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CalcWeaponUpgradeReturnItemsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CalcWeaponUpgradeReturnItemsReq", [
            { no: 15, name: "food_weapon_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam }
        ]);
    }
    create(value) {
        const message = { foodWeaponGuidList: [], itemParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 food_weapon_guid_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional uint64 target_weapon_guid */ 12:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated com.midnights.game.ItemParam item_param_list */ 3:
                    message.itemParamList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 food_weapon_guid_list = 15; */
        for (let i = 0; i < message.foodWeaponGuidList.length; i++)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.foodWeaponGuidList[i]);
        /* optional uint64 target_weapon_guid = 12; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* repeated com.midnights.game.ItemParam item_param_list = 3; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CalcWeaponUpgradeReturnItemsReq
 */
exports.CalcWeaponUpgradeReturnItemsReq = new CalcWeaponUpgradeReturnItemsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CalcWeaponUpgradeReturnItemsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CalcWeaponUpgradeReturnItemsRsp", [
            { no: 4, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ItemParam },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "target_weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam item_param_list */ 4:
                    message.itemParamList.push(define_2.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 target_weapon_guid */ 8:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ItemParam item_param_list = 4; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_2.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 target_weapon_guid = 8; */
        if (message.targetWeaponGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CalcWeaponUpgradeReturnItemsRsp
 */
exports.CalcWeaponUpgradeReturnItemsRsp = new CalcWeaponUpgradeReturnItemsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeDataNotify", [
            { no: 5, name: "forge_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ForgeQueueData } },
            { no: 14, name: "max_queue_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forgeIdList: [], forgeQueueMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 forge_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forgeIdList.push(reader.uint32());
                    else
                        message.forgeIdList.push(reader.uint32());
                    break;
                case /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map */ 8:
                    this.binaryReadMap8(message.forgeQueueMap, reader, options);
                    break;
                case /* optional uint32 max_queue_num */ 14:
                    message.maxQueueNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ForgeDataNotify.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? exports.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 forge_id_list = 5; */
        for (let i = 0; i < message.forgeIdList.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.forgeIdList[i]);
        /* map<uint32, com.midnights.game.ForgeQueueData> forge_queue_map = 8; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 max_queue_num = 14; */
        if (message.maxQueueNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.maxQueueNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeDataNotify
 */
exports.ForgeDataNotify = new ForgeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgeFormulaDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForgeFormulaDataNotify", [
            { no: 15, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "forge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_locked */ 15:
                    message.isLocked = reader.bool();
                    break;
                case /* optional uint32 forge_id */ 13:
                    message.forgeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_locked = 15; */
        if (message.isLocked !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isLocked);
        /* optional uint32 forge_id = 13; */
        if (message.forgeId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.forgeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForgeFormulaDataNotify
 */
exports.ForgeFormulaDataNotify = new ForgeFormulaDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombineDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombineDataNotify", [
            { no: 5, name: "combine_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { combineIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 combine_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.combineIdList.push(reader.uint32());
                    else
                        message.combineIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 combine_id_list = 5; */
        for (let i = 0; i < message.combineIdList.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.combineIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CombineDataNotify
 */
exports.CombineDataNotify = new CombineDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombineFormulaDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombineFormulaDataNotify", [
            { no: 6, name: "combine_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 combine_id */ 6:
                    message.combineId = reader.uint32();
                    break;
                case /* optional bool is_locked */ 3:
                    message.isLocked = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 combine_id = 6; */
        if (message.combineId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.combineId);
        /* optional bool is_locked = 3; */
        if (message.isLocked !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isLocked);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CombineFormulaDataNotify
 */
exports.CombineFormulaDataNotify = new CombineFormulaDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClosedItemNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClosedItemNotify", [
            { no: 8, name: "item_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 item_id_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemIdList.push(reader.uint32());
                    else
                        message.itemIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 item_id_list = 8; */
        for (let i = 0; i < message.itemIdList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.itemIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClosedItemNotify
 */
exports.ClosedItemNotify = new ClosedItemNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckAddItemExceedLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckAddItemExceedLimitNotify", [
            { no: 5, name: "is_drop", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "msg_type", kind: "enum", opt: true, T: () => ["com.midnights.game.CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType", CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType] },
            { no: 10, name: "exceeded_item_type_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "exceeded_item_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "reason", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exceededItemTypeList: [], exceededItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_drop */ 5:
                    message.isDrop = reader.bool();
                    break;
                case /* optional com.midnights.game.CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type */ 4:
                    message.msgType = reader.int32();
                    break;
                case /* repeated uint32 exceeded_item_type_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemTypeList.push(reader.uint32());
                    else
                        message.exceededItemTypeList.push(reader.uint32());
                    break;
                case /* repeated uint32 exceeded_item_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemList.push(reader.uint32());
                    else
                        message.exceededItemList.push(reader.uint32());
                    break;
                case /* optional uint32 reason */ 14:
                    message.reason = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_drop = 5; */
        if (message.isDrop !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isDrop);
        /* optional com.midnights.game.CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type = 4; */
        if (message.msgType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.msgType);
        /* repeated uint32 exceeded_item_type_list = 10; */
        for (let i = 0; i < message.exceededItemTypeList.length; i++)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.exceededItemTypeList[i]);
        /* repeated uint32 exceeded_item_list = 12; */
        for (let i = 0; i < message.exceededItemList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.exceededItemList[i]);
        /* optional uint32 reason = 14; */
        if (message.reason !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckAddItemExceedLimitNotify
 */
exports.CheckAddItemExceedLimitNotify = new CheckAddItemExceedLimitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetIsAutoUnlockSpecificEquipReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetIsAutoUnlockSpecificEquipReq", [
            { no: 14, name: "is_auto_unlock_specific_equip", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_auto_unlock_specific_equip */ 14:
                    message.isAutoUnlockSpecificEquip = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_auto_unlock_specific_equip = 14; */
        if (message.isAutoUnlockSpecificEquip !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isAutoUnlockSpecificEquip);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetIsAutoUnlockSpecificEquipReq
 */
exports.SetIsAutoUnlockSpecificEquipReq = new SetIsAutoUnlockSpecificEquipReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetIsAutoUnlockSpecificEquipRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetIsAutoUnlockSpecificEquipRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.SetIsAutoUnlockSpecificEquipRsp
 */
exports.SetIsAutoUnlockSpecificEquipRsp = new SetIsAutoUnlockSpecificEquipRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryDecomposeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryDecomposeReq", [
            { no: 13, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "target_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { guidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 config_id */ 13:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 target_count */ 9:
                    message.targetCount = reader.uint32();
                    break;
                case /* repeated uint64 guid_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.guidList.push(reader.uint64().toBigInt());
                    else
                        message.guidList.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 config_id = 13; */
        if (message.configId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 target_count = 9; */
        if (message.targetCount !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetCount);
        /* repeated uint64 guid_list = 8; */
        for (let i = 0; i < message.guidList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.guidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryDecomposeReq
 */
exports.ReliquaryDecomposeReq = new ReliquaryDecomposeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryDecomposeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReliquaryDecomposeRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { guidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint64 guid_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.guidList.push(reader.uint64().toBigInt());
                    else
                        message.guidList.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated uint64 guid_list = 14; */
        for (let i = 0; i < message.guidList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.guidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReliquaryDecomposeRsp
 */
exports.ReliquaryDecomposeRsp = new ReliquaryDecomposeRsp$Type();
