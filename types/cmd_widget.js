"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCreatorOpType = exports.WidgetSlotOp = exports.WidgetSlotTag = exports.LunchBoxSlotType = exports.RemotePlayerWidgetNotify_CmdId = exports.AllWidgetBackgroundActiveStateNotify_CmdId = exports.ChangeWidgetBackgroundActiveStateRsp_CmdId = exports.ChangeWidgetBackgroundActiveStateReq_CmdId = exports.FireworksLaunchDataNotify_CmdId = exports.LaunchFireworksRsp_CmdId = exports.LaunchFireworksReq_CmdId = exports.ReformFireworksRsp_CmdId = exports.ReformFireworksReq_CmdId = exports.FireworksReformDataNotify_CmdId = exports.WidgetUpdateExtraCDRsp_CmdId = exports.WidgetUpdateExtraCDReq_CmdId = exports.WidgetCaptureAnimalRsp_CmdId = exports.WidgetCaptureAnimalReq_CmdId = exports.WidgetUseAttachAbilityGroupChangeNotify_CmdId = exports.WidgetActiveChangeNotify_CmdId = exports.WidgetDoBagRsp_CmdId = exports.WidgetDoBagReq_CmdId = exports.WidgetGadgetDestroyNotify_CmdId = exports.WidgetGadgetDataNotify_CmdId = exports.WidgetGadgetAllDataNotify_CmdId = exports.UseWidgetRetractGadgetRsp_CmdId = exports.UseWidgetRetractGadgetReq_CmdId = exports.UseWidgetCreateGadgetRsp_CmdId = exports.UseWidgetCreateGadgetReq_CmdId = exports.AllWidgetDataNotify_CmdId = exports.GetWidgetSlotRsp_CmdId = exports.GetWidgetSlotReq_CmdId = exports.WidgetSlotChangeNotify_CmdId = exports.SetWidgetSlotRsp_CmdId = exports.SetWidgetSlotReq_CmdId = exports.TreasureMapDetectorDataNotify_CmdId = exports.SkyCrystalDetectorDataUpdateNotify_CmdId = exports.OneoffGatherPointDetectorDataNotify_CmdId = exports.ClientCollectorDataNotify_CmdId = exports.WidgetReportRsp_CmdId = exports.WidgetReportReq_CmdId = exports.WidgetCoolDownNotify_CmdId = exports.QuickUseWidgetRsp_CmdId = exports.QuickUseWidgetReq_CmdId = exports.SetUpLunchBoxWidgetRsp_CmdId = exports.SetUpLunchBoxWidgetReq_CmdId = exports.AnchorPointOpRsp_CmdId = exports.AnchorPointOpReq_AnchorPointOpType = exports.AnchorPointOpReq_CmdId = exports.AnchorPointDataNotify_CmdId = void 0;
exports.WidgetCaptureAnimalRsp = exports.WidgetCaptureAnimalReq = exports.WidgetUseAttachAbilityGroupChangeNotify = exports.WidgetActiveChangeNotify = exports.WidgetDoBagRsp = exports.WidgetDoBagReq = exports.WidgetCreatorInfo = exports.WidgetCreateLocationInfo = exports.WidgetGadgetDestroyNotify = exports.WidgetGadgetDataNotify = exports.WidgetGadgetAllDataNotify = exports.WidgetGadgetData = exports.UseWidgetRetractGadgetRsp = exports.UseWidgetRetractGadgetReq = exports.UseWidgetCreateGadgetRsp = exports.UseWidgetCreateGadgetReq = exports.AllWidgetDataNotify = exports.GetWidgetSlotRsp = exports.GetWidgetSlotReq = exports.WidgetSlotChangeNotify = exports.SetWidgetSlotRsp = exports.SetWidgetSlotReq = exports.WidgetSlotData = exports.TreasureMapDetectorDataNotify = exports.SkyCrystalDetectorDataUpdateNotify = exports.OneoffGatherPointDetectorDataNotify = exports.ClientCollectorDataNotify = exports.WidgetReportRsp = exports.WidgetReportReq = exports.WidgetCoolDownNotify = exports.WidgetCoolDownData = exports.QuickUseWidgetRsp = exports.QuickUseWidgetReq = exports.WidgetThunderBirdFeatherInfo = exports.WidgetCameraInfo = exports.SkyCrystalDetectorQuickUseResult = exports.SkyCrystalDetectorData = exports.TreasureMapDetectorData = exports.ClientCollectorData = exports.OneoffGatherPointDetectorData = exports.SetUpLunchBoxWidgetRsp = exports.SetUpLunchBoxWidgetReq = exports.LunchBoxData = exports.AnchorPointOpRsp = exports.AnchorPointOpReq = exports.AnchorPointDataNotify = exports.AnchorPointData = exports.FireworksLaunchParamType = exports.FireworksReformParamType = exports.WIDGET_EXTRA_CD_TYPE = void 0;
exports.RemotePlayerWidgetNotify = exports.PlayerWidgetInfo = exports.AllWidgetBackgroundActiveStateNotify = exports.ChangeWidgetBackgroundActiveStateRsp = exports.ChangeWidgetBackgroundActiveStateReq = exports.FireworksLaunchDataNotify = exports.LaunchFireworksRsp = exports.LaunchFireworksReq = exports.FireworksLaunchSchemeData = exports.FireworksLaunchParam = exports.ReformFireworksRsp = exports.ReformFireworksReq = exports.FireworksReformDataNotify = exports.FireworksReformData = exports.FireworksReformParam = exports.WidgetUpdateExtraCDRsp = exports.WidgetUpdateExtraCDReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.AnchorPointDataNotify.CmdId
 */
var AnchorPointDataNotify_CmdId;
(function (AnchorPointDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointDataNotify_CmdId[AnchorPointDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4276;
     */
    AnchorPointDataNotify_CmdId[AnchorPointDataNotify_CmdId["CMD_ID"] = 4276] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointDataNotify_CmdId[AnchorPointDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnchorPointDataNotify_CmdId[AnchorPointDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AnchorPointDataNotify_CmdId = exports.AnchorPointDataNotify_CmdId || (exports.AnchorPointDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AnchorPointOpReq.CmdId
 */
var AnchorPointOpReq_CmdId;
(function (AnchorPointOpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointOpReq_CmdId[AnchorPointOpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4257;
     */
    AnchorPointOpReq_CmdId[AnchorPointOpReq_CmdId["CMD_ID"] = 4257] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointOpReq_CmdId[AnchorPointOpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnchorPointOpReq_CmdId[AnchorPointOpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnchorPointOpReq_CmdId[AnchorPointOpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AnchorPointOpReq_CmdId = exports.AnchorPointOpReq_CmdId || (exports.AnchorPointOpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AnchorPointOpReq.AnchorPointOpType
 */
var AnchorPointOpReq_AnchorPointOpType;
(function (AnchorPointOpReq_AnchorPointOpType) {
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_NONE = 0;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["ANCHOR_POINT_OP_NONE"] = 0] = "ANCHOR_POINT_OP_NONE";
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_TELEPORT = 1;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["ANCHOR_POINT_OP_TELEPORT"] = 1] = "ANCHOR_POINT_OP_TELEPORT";
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_REMOVE = 2;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["ANCHOR_POINT_OP_REMOVE"] = 2] = "ANCHOR_POINT_OP_REMOVE";
})(AnchorPointOpReq_AnchorPointOpType = exports.AnchorPointOpReq_AnchorPointOpType || (exports.AnchorPointOpReq_AnchorPointOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.AnchorPointOpRsp.CmdId
 */
var AnchorPointOpRsp_CmdId;
(function (AnchorPointOpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointOpRsp_CmdId[AnchorPointOpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4252;
     */
    AnchorPointOpRsp_CmdId[AnchorPointOpRsp_CmdId["CMD_ID"] = 4252] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnchorPointOpRsp_CmdId[AnchorPointOpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnchorPointOpRsp_CmdId[AnchorPointOpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AnchorPointOpRsp_CmdId = exports.AnchorPointOpRsp_CmdId || (exports.AnchorPointOpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetUpLunchBoxWidgetReq.CmdId
 */
var SetUpLunchBoxWidgetReq_CmdId;
(function (SetUpLunchBoxWidgetReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpLunchBoxWidgetReq_CmdId[SetUpLunchBoxWidgetReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4272;
     */
    SetUpLunchBoxWidgetReq_CmdId[SetUpLunchBoxWidgetReq_CmdId["CMD_ID"] = 4272] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpLunchBoxWidgetReq_CmdId[SetUpLunchBoxWidgetReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpLunchBoxWidgetReq_CmdId[SetUpLunchBoxWidgetReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpLunchBoxWidgetReq_CmdId[SetUpLunchBoxWidgetReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetUpLunchBoxWidgetReq_CmdId = exports.SetUpLunchBoxWidgetReq_CmdId || (exports.SetUpLunchBoxWidgetReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetUpLunchBoxWidgetRsp.CmdId
 */
var SetUpLunchBoxWidgetRsp_CmdId;
(function (SetUpLunchBoxWidgetRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpLunchBoxWidgetRsp_CmdId[SetUpLunchBoxWidgetRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4294;
     */
    SetUpLunchBoxWidgetRsp_CmdId[SetUpLunchBoxWidgetRsp_CmdId["CMD_ID"] = 4294] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpLunchBoxWidgetRsp_CmdId[SetUpLunchBoxWidgetRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpLunchBoxWidgetRsp_CmdId[SetUpLunchBoxWidgetRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetUpLunchBoxWidgetRsp_CmdId = exports.SetUpLunchBoxWidgetRsp_CmdId || (exports.SetUpLunchBoxWidgetRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuickUseWidgetReq.CmdId
 */
var QuickUseWidgetReq_CmdId;
(function (QuickUseWidgetReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuickUseWidgetReq_CmdId[QuickUseWidgetReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4299;
     */
    QuickUseWidgetReq_CmdId[QuickUseWidgetReq_CmdId["CMD_ID"] = 4299] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuickUseWidgetReq_CmdId[QuickUseWidgetReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuickUseWidgetReq_CmdId[QuickUseWidgetReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuickUseWidgetReq_CmdId[QuickUseWidgetReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuickUseWidgetReq_CmdId = exports.QuickUseWidgetReq_CmdId || (exports.QuickUseWidgetReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuickUseWidgetRsp.CmdId
 */
var QuickUseWidgetRsp_CmdId;
(function (QuickUseWidgetRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuickUseWidgetRsp_CmdId[QuickUseWidgetRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4270;
     */
    QuickUseWidgetRsp_CmdId[QuickUseWidgetRsp_CmdId["CMD_ID"] = 4270] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuickUseWidgetRsp_CmdId[QuickUseWidgetRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuickUseWidgetRsp_CmdId[QuickUseWidgetRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuickUseWidgetRsp_CmdId = exports.QuickUseWidgetRsp_CmdId || (exports.QuickUseWidgetRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetCoolDownNotify.CmdId
 */
var WidgetCoolDownNotify_CmdId;
(function (WidgetCoolDownNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCoolDownNotify_CmdId[WidgetCoolDownNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4295;
     */
    WidgetCoolDownNotify_CmdId[WidgetCoolDownNotify_CmdId["CMD_ID"] = 4295] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCoolDownNotify_CmdId[WidgetCoolDownNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetCoolDownNotify_CmdId[WidgetCoolDownNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetCoolDownNotify_CmdId = exports.WidgetCoolDownNotify_CmdId || (exports.WidgetCoolDownNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetReportReq.CmdId
 */
var WidgetReportReq_CmdId;
(function (WidgetReportReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetReportReq_CmdId[WidgetReportReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4291;
     */
    WidgetReportReq_CmdId[WidgetReportReq_CmdId["CMD_ID"] = 4291] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetReportReq_CmdId[WidgetReportReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetReportReq_CmdId[WidgetReportReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetReportReq_CmdId[WidgetReportReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WidgetReportReq_CmdId = exports.WidgetReportReq_CmdId || (exports.WidgetReportReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetReportRsp.CmdId
 */
var WidgetReportRsp_CmdId;
(function (WidgetReportRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetReportRsp_CmdId[WidgetReportRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4292;
     */
    WidgetReportRsp_CmdId[WidgetReportRsp_CmdId["CMD_ID"] = 4292] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetReportRsp_CmdId[WidgetReportRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetReportRsp_CmdId[WidgetReportRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetReportRsp_CmdId = exports.WidgetReportRsp_CmdId || (exports.WidgetReportRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientCollectorDataNotify.CmdId
 */
var ClientCollectorDataNotify_CmdId;
(function (ClientCollectorDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientCollectorDataNotify_CmdId[ClientCollectorDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4264;
     */
    ClientCollectorDataNotify_CmdId[ClientCollectorDataNotify_CmdId["CMD_ID"] = 4264] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientCollectorDataNotify_CmdId[ClientCollectorDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientCollectorDataNotify_CmdId[ClientCollectorDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ClientCollectorDataNotify_CmdId = exports.ClientCollectorDataNotify_CmdId || (exports.ClientCollectorDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OneoffGatherPointDetectorDataNotify.CmdId
 */
var OneoffGatherPointDetectorDataNotify_CmdId;
(function (OneoffGatherPointDetectorDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OneoffGatherPointDetectorDataNotify_CmdId[OneoffGatherPointDetectorDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4297;
     */
    OneoffGatherPointDetectorDataNotify_CmdId[OneoffGatherPointDetectorDataNotify_CmdId["CMD_ID"] = 4297] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OneoffGatherPointDetectorDataNotify_CmdId[OneoffGatherPointDetectorDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OneoffGatherPointDetectorDataNotify_CmdId[OneoffGatherPointDetectorDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OneoffGatherPointDetectorDataNotify_CmdId = exports.OneoffGatherPointDetectorDataNotify_CmdId || (exports.OneoffGatherPointDetectorDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SkyCrystalDetectorDataUpdateNotify.CmdId
 */
var SkyCrystalDetectorDataUpdateNotify_CmdId;
(function (SkyCrystalDetectorDataUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SkyCrystalDetectorDataUpdateNotify_CmdId[SkyCrystalDetectorDataUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4287;
     */
    SkyCrystalDetectorDataUpdateNotify_CmdId[SkyCrystalDetectorDataUpdateNotify_CmdId["CMD_ID"] = 4287] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SkyCrystalDetectorDataUpdateNotify_CmdId[SkyCrystalDetectorDataUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SkyCrystalDetectorDataUpdateNotify_CmdId[SkyCrystalDetectorDataUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SkyCrystalDetectorDataUpdateNotify_CmdId = exports.SkyCrystalDetectorDataUpdateNotify_CmdId || (exports.SkyCrystalDetectorDataUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TreasureMapDetectorDataNotify.CmdId
 */
var TreasureMapDetectorDataNotify_CmdId;
(function (TreasureMapDetectorDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TreasureMapDetectorDataNotify_CmdId[TreasureMapDetectorDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4300;
     */
    TreasureMapDetectorDataNotify_CmdId[TreasureMapDetectorDataNotify_CmdId["CMD_ID"] = 4300] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TreasureMapDetectorDataNotify_CmdId[TreasureMapDetectorDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TreasureMapDetectorDataNotify_CmdId[TreasureMapDetectorDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TreasureMapDetectorDataNotify_CmdId = exports.TreasureMapDetectorDataNotify_CmdId || (exports.TreasureMapDetectorDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetWidgetSlotReq.CmdId
 */
var SetWidgetSlotReq_CmdId;
(function (SetWidgetSlotReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetWidgetSlotReq_CmdId[SetWidgetSlotReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4259;
     */
    SetWidgetSlotReq_CmdId[SetWidgetSlotReq_CmdId["CMD_ID"] = 4259] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetWidgetSlotReq_CmdId[SetWidgetSlotReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetWidgetSlotReq_CmdId[SetWidgetSlotReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetWidgetSlotReq_CmdId[SetWidgetSlotReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetWidgetSlotReq_CmdId = exports.SetWidgetSlotReq_CmdId || (exports.SetWidgetSlotReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetWidgetSlotRsp.CmdId
 */
var SetWidgetSlotRsp_CmdId;
(function (SetWidgetSlotRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetWidgetSlotRsp_CmdId[SetWidgetSlotRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4277;
     */
    SetWidgetSlotRsp_CmdId[SetWidgetSlotRsp_CmdId["CMD_ID"] = 4277] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetWidgetSlotRsp_CmdId[SetWidgetSlotRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetWidgetSlotRsp_CmdId[SetWidgetSlotRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetWidgetSlotRsp_CmdId = exports.SetWidgetSlotRsp_CmdId || (exports.SetWidgetSlotRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetSlotChangeNotify.CmdId
 */
var WidgetSlotChangeNotify_CmdId;
(function (WidgetSlotChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetSlotChangeNotify_CmdId[WidgetSlotChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4267;
     */
    WidgetSlotChangeNotify_CmdId[WidgetSlotChangeNotify_CmdId["CMD_ID"] = 4267] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetSlotChangeNotify_CmdId[WidgetSlotChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetSlotChangeNotify_CmdId[WidgetSlotChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetSlotChangeNotify_CmdId = exports.WidgetSlotChangeNotify_CmdId || (exports.WidgetSlotChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetWidgetSlotReq.CmdId
 */
var GetWidgetSlotReq_CmdId;
(function (GetWidgetSlotReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWidgetSlotReq_CmdId[GetWidgetSlotReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4253;
     */
    GetWidgetSlotReq_CmdId[GetWidgetSlotReq_CmdId["CMD_ID"] = 4253] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWidgetSlotReq_CmdId[GetWidgetSlotReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWidgetSlotReq_CmdId[GetWidgetSlotReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWidgetSlotReq_CmdId[GetWidgetSlotReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetWidgetSlotReq_CmdId = exports.GetWidgetSlotReq_CmdId || (exports.GetWidgetSlotReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetWidgetSlotRsp.CmdId
 */
var GetWidgetSlotRsp_CmdId;
(function (GetWidgetSlotRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWidgetSlotRsp_CmdId[GetWidgetSlotRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4254;
     */
    GetWidgetSlotRsp_CmdId[GetWidgetSlotRsp_CmdId["CMD_ID"] = 4254] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWidgetSlotRsp_CmdId[GetWidgetSlotRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWidgetSlotRsp_CmdId[GetWidgetSlotRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetWidgetSlotRsp_CmdId = exports.GetWidgetSlotRsp_CmdId || (exports.GetWidgetSlotRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AllWidgetDataNotify.CmdId
 */
var AllWidgetDataNotify_CmdId;
(function (AllWidgetDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllWidgetDataNotify_CmdId[AllWidgetDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4271;
     */
    AllWidgetDataNotify_CmdId[AllWidgetDataNotify_CmdId["CMD_ID"] = 4271] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllWidgetDataNotify_CmdId[AllWidgetDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllWidgetDataNotify_CmdId[AllWidgetDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AllWidgetDataNotify_CmdId = exports.AllWidgetDataNotify_CmdId || (exports.AllWidgetDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseWidgetCreateGadgetReq.CmdId
 */
var UseWidgetCreateGadgetReq_CmdId;
(function (UseWidgetCreateGadgetReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetCreateGadgetReq_CmdId[UseWidgetCreateGadgetReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4293;
     */
    UseWidgetCreateGadgetReq_CmdId[UseWidgetCreateGadgetReq_CmdId["CMD_ID"] = 4293] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetCreateGadgetReq_CmdId[UseWidgetCreateGadgetReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetCreateGadgetReq_CmdId[UseWidgetCreateGadgetReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetCreateGadgetReq_CmdId[UseWidgetCreateGadgetReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UseWidgetCreateGadgetReq_CmdId = exports.UseWidgetCreateGadgetReq_CmdId || (exports.UseWidgetCreateGadgetReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseWidgetCreateGadgetRsp.CmdId
 */
var UseWidgetCreateGadgetRsp_CmdId;
(function (UseWidgetCreateGadgetRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetCreateGadgetRsp_CmdId[UseWidgetCreateGadgetRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4290;
     */
    UseWidgetCreateGadgetRsp_CmdId[UseWidgetCreateGadgetRsp_CmdId["CMD_ID"] = 4290] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetCreateGadgetRsp_CmdId[UseWidgetCreateGadgetRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetCreateGadgetRsp_CmdId[UseWidgetCreateGadgetRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UseWidgetCreateGadgetRsp_CmdId = exports.UseWidgetCreateGadgetRsp_CmdId || (exports.UseWidgetCreateGadgetRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseWidgetRetractGadgetReq.CmdId
 */
var UseWidgetRetractGadgetReq_CmdId;
(function (UseWidgetRetractGadgetReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetRetractGadgetReq_CmdId[UseWidgetRetractGadgetReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4286;
     */
    UseWidgetRetractGadgetReq_CmdId[UseWidgetRetractGadgetReq_CmdId["CMD_ID"] = 4286] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetRetractGadgetReq_CmdId[UseWidgetRetractGadgetReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetRetractGadgetReq_CmdId[UseWidgetRetractGadgetReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetRetractGadgetReq_CmdId[UseWidgetRetractGadgetReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UseWidgetRetractGadgetReq_CmdId = exports.UseWidgetRetractGadgetReq_CmdId || (exports.UseWidgetRetractGadgetReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseWidgetRetractGadgetRsp.CmdId
 */
var UseWidgetRetractGadgetRsp_CmdId;
(function (UseWidgetRetractGadgetRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetRetractGadgetRsp_CmdId[UseWidgetRetractGadgetRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4261;
     */
    UseWidgetRetractGadgetRsp_CmdId[UseWidgetRetractGadgetRsp_CmdId["CMD_ID"] = 4261] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseWidgetRetractGadgetRsp_CmdId[UseWidgetRetractGadgetRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetRetractGadgetRsp_CmdId[UseWidgetRetractGadgetRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseWidgetRetractGadgetRsp_CmdId[UseWidgetRetractGadgetRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UseWidgetRetractGadgetRsp_CmdId = exports.UseWidgetRetractGadgetRsp_CmdId || (exports.UseWidgetRetractGadgetRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetGadgetAllDataNotify.CmdId
 */
var WidgetGadgetAllDataNotify_CmdId;
(function (WidgetGadgetAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetAllDataNotify_CmdId[WidgetGadgetAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4284;
     */
    WidgetGadgetAllDataNotify_CmdId[WidgetGadgetAllDataNotify_CmdId["CMD_ID"] = 4284] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetAllDataNotify_CmdId[WidgetGadgetAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetGadgetAllDataNotify_CmdId[WidgetGadgetAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetGadgetAllDataNotify_CmdId = exports.WidgetGadgetAllDataNotify_CmdId || (exports.WidgetGadgetAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetGadgetDataNotify.CmdId
 */
var WidgetGadgetDataNotify_CmdId;
(function (WidgetGadgetDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetDataNotify_CmdId[WidgetGadgetDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4266;
     */
    WidgetGadgetDataNotify_CmdId[WidgetGadgetDataNotify_CmdId["CMD_ID"] = 4266] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetDataNotify_CmdId[WidgetGadgetDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetGadgetDataNotify_CmdId[WidgetGadgetDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetGadgetDataNotify_CmdId = exports.WidgetGadgetDataNotify_CmdId || (exports.WidgetGadgetDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetGadgetDestroyNotify.CmdId
 */
var WidgetGadgetDestroyNotify_CmdId;
(function (WidgetGadgetDestroyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetDestroyNotify_CmdId[WidgetGadgetDestroyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4274;
     */
    WidgetGadgetDestroyNotify_CmdId[WidgetGadgetDestroyNotify_CmdId["CMD_ID"] = 4274] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetGadgetDestroyNotify_CmdId[WidgetGadgetDestroyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetGadgetDestroyNotify_CmdId[WidgetGadgetDestroyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetGadgetDestroyNotify_CmdId = exports.WidgetGadgetDestroyNotify_CmdId || (exports.WidgetGadgetDestroyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetDoBagReq.CmdId
 */
var WidgetDoBagReq_CmdId;
(function (WidgetDoBagReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetDoBagReq_CmdId[WidgetDoBagReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4255;
     */
    WidgetDoBagReq_CmdId[WidgetDoBagReq_CmdId["CMD_ID"] = 4255] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetDoBagReq_CmdId[WidgetDoBagReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetDoBagReq_CmdId[WidgetDoBagReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetDoBagReq_CmdId[WidgetDoBagReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WidgetDoBagReq_CmdId = exports.WidgetDoBagReq_CmdId || (exports.WidgetDoBagReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetDoBagRsp.CmdId
 */
var WidgetDoBagRsp_CmdId;
(function (WidgetDoBagRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetDoBagRsp_CmdId[WidgetDoBagRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4296;
     */
    WidgetDoBagRsp_CmdId[WidgetDoBagRsp_CmdId["CMD_ID"] = 4296] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetDoBagRsp_CmdId[WidgetDoBagRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetDoBagRsp_CmdId[WidgetDoBagRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetDoBagRsp_CmdId = exports.WidgetDoBagRsp_CmdId || (exports.WidgetDoBagRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetActiveChangeNotify.CmdId
 */
var WidgetActiveChangeNotify_CmdId;
(function (WidgetActiveChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetActiveChangeNotify_CmdId[WidgetActiveChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4280;
     */
    WidgetActiveChangeNotify_CmdId[WidgetActiveChangeNotify_CmdId["CMD_ID"] = 4280] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetActiveChangeNotify_CmdId[WidgetActiveChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetActiveChangeNotify_CmdId[WidgetActiveChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetActiveChangeNotify_CmdId = exports.WidgetActiveChangeNotify_CmdId || (exports.WidgetActiveChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetUseAttachAbilityGroupChangeNotify.CmdId
 */
var WidgetUseAttachAbilityGroupChangeNotify_CmdId;
(function (WidgetUseAttachAbilityGroupChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUseAttachAbilityGroupChangeNotify_CmdId[WidgetUseAttachAbilityGroupChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4258;
     */
    WidgetUseAttachAbilityGroupChangeNotify_CmdId[WidgetUseAttachAbilityGroupChangeNotify_CmdId["CMD_ID"] = 4258] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUseAttachAbilityGroupChangeNotify_CmdId[WidgetUseAttachAbilityGroupChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetUseAttachAbilityGroupChangeNotify_CmdId[WidgetUseAttachAbilityGroupChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetUseAttachAbilityGroupChangeNotify_CmdId = exports.WidgetUseAttachAbilityGroupChangeNotify_CmdId || (exports.WidgetUseAttachAbilityGroupChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetCaptureAnimalReq.CmdId
 */
var WidgetCaptureAnimalReq_CmdId;
(function (WidgetCaptureAnimalReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCaptureAnimalReq_CmdId[WidgetCaptureAnimalReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4256;
     */
    WidgetCaptureAnimalReq_CmdId[WidgetCaptureAnimalReq_CmdId["CMD_ID"] = 4256] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCaptureAnimalReq_CmdId[WidgetCaptureAnimalReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetCaptureAnimalReq_CmdId[WidgetCaptureAnimalReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetCaptureAnimalReq_CmdId[WidgetCaptureAnimalReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WidgetCaptureAnimalReq_CmdId = exports.WidgetCaptureAnimalReq_CmdId || (exports.WidgetCaptureAnimalReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetCaptureAnimalRsp.CmdId
 */
var WidgetCaptureAnimalRsp_CmdId;
(function (WidgetCaptureAnimalRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCaptureAnimalRsp_CmdId[WidgetCaptureAnimalRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4289;
     */
    WidgetCaptureAnimalRsp_CmdId[WidgetCaptureAnimalRsp_CmdId["CMD_ID"] = 4289] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetCaptureAnimalRsp_CmdId[WidgetCaptureAnimalRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetCaptureAnimalRsp_CmdId[WidgetCaptureAnimalRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetCaptureAnimalRsp_CmdId = exports.WidgetCaptureAnimalRsp_CmdId || (exports.WidgetCaptureAnimalRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetUpdateExtraCDReq.CmdId
 */
var WidgetUpdateExtraCDReq_CmdId;
(function (WidgetUpdateExtraCDReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUpdateExtraCDReq_CmdId[WidgetUpdateExtraCDReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5960;
     */
    WidgetUpdateExtraCDReq_CmdId[WidgetUpdateExtraCDReq_CmdId["CMD_ID"] = 5960] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUpdateExtraCDReq_CmdId[WidgetUpdateExtraCDReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetUpdateExtraCDReq_CmdId[WidgetUpdateExtraCDReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetUpdateExtraCDReq_CmdId[WidgetUpdateExtraCDReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WidgetUpdateExtraCDReq_CmdId = exports.WidgetUpdateExtraCDReq_CmdId || (exports.WidgetUpdateExtraCDReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetUpdateExtraCDRsp.CmdId
 */
var WidgetUpdateExtraCDRsp_CmdId;
(function (WidgetUpdateExtraCDRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUpdateExtraCDRsp_CmdId[WidgetUpdateExtraCDRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6056;
     */
    WidgetUpdateExtraCDRsp_CmdId[WidgetUpdateExtraCDRsp_CmdId["CMD_ID"] = 6056] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetUpdateExtraCDRsp_CmdId[WidgetUpdateExtraCDRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetUpdateExtraCDRsp_CmdId[WidgetUpdateExtraCDRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetUpdateExtraCDRsp_CmdId = exports.WidgetUpdateExtraCDRsp_CmdId || (exports.WidgetUpdateExtraCDRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FireworksReformDataNotify.CmdId
 */
var FireworksReformDataNotify_CmdId;
(function (FireworksReformDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FireworksReformDataNotify_CmdId[FireworksReformDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6033;
     */
    FireworksReformDataNotify_CmdId[FireworksReformDataNotify_CmdId["CMD_ID"] = 6033] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FireworksReformDataNotify_CmdId[FireworksReformDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FireworksReformDataNotify_CmdId[FireworksReformDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FireworksReformDataNotify_CmdId = exports.FireworksReformDataNotify_CmdId || (exports.FireworksReformDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReformFireworksReq.CmdId
 */
var ReformFireworksReq_CmdId;
(function (ReformFireworksReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReformFireworksReq_CmdId[ReformFireworksReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6036;
     */
    ReformFireworksReq_CmdId[ReformFireworksReq_CmdId["CMD_ID"] = 6036] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReformFireworksReq_CmdId[ReformFireworksReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReformFireworksReq_CmdId[ReformFireworksReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReformFireworksReq_CmdId[ReformFireworksReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReformFireworksReq_CmdId = exports.ReformFireworksReq_CmdId || (exports.ReformFireworksReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReformFireworksRsp.CmdId
 */
var ReformFireworksRsp_CmdId;
(function (ReformFireworksRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReformFireworksRsp_CmdId[ReformFireworksRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5929;
     */
    ReformFireworksRsp_CmdId[ReformFireworksRsp_CmdId["CMD_ID"] = 5929] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReformFireworksRsp_CmdId[ReformFireworksRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReformFireworksRsp_CmdId[ReformFireworksRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReformFireworksRsp_CmdId = exports.ReformFireworksRsp_CmdId || (exports.ReformFireworksRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LaunchFireworksReq.CmdId
 */
var LaunchFireworksReq_CmdId;
(function (LaunchFireworksReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LaunchFireworksReq_CmdId[LaunchFireworksReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6090;
     */
    LaunchFireworksReq_CmdId[LaunchFireworksReq_CmdId["CMD_ID"] = 6090] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LaunchFireworksReq_CmdId[LaunchFireworksReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LaunchFireworksReq_CmdId[LaunchFireworksReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LaunchFireworksReq_CmdId[LaunchFireworksReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(LaunchFireworksReq_CmdId = exports.LaunchFireworksReq_CmdId || (exports.LaunchFireworksReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LaunchFireworksRsp.CmdId
 */
var LaunchFireworksRsp_CmdId;
(function (LaunchFireworksRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LaunchFireworksRsp_CmdId[LaunchFireworksRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6057;
     */
    LaunchFireworksRsp_CmdId[LaunchFireworksRsp_CmdId["CMD_ID"] = 6057] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LaunchFireworksRsp_CmdId[LaunchFireworksRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LaunchFireworksRsp_CmdId[LaunchFireworksRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LaunchFireworksRsp_CmdId = exports.LaunchFireworksRsp_CmdId || (exports.LaunchFireworksRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FireworksLaunchDataNotify.CmdId
 */
var FireworksLaunchDataNotify_CmdId;
(function (FireworksLaunchDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FireworksLaunchDataNotify_CmdId[FireworksLaunchDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5928;
     */
    FireworksLaunchDataNotify_CmdId[FireworksLaunchDataNotify_CmdId["CMD_ID"] = 5928] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FireworksLaunchDataNotify_CmdId[FireworksLaunchDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FireworksLaunchDataNotify_CmdId[FireworksLaunchDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FireworksLaunchDataNotify_CmdId = exports.FireworksLaunchDataNotify_CmdId || (exports.FireworksLaunchDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeWidgetBackgroundActiveStateReq.CmdId
 */
var ChangeWidgetBackgroundActiveStateReq_CmdId;
(function (ChangeWidgetBackgroundActiveStateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWidgetBackgroundActiveStateReq_CmdId[ChangeWidgetBackgroundActiveStateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5907;
     */
    ChangeWidgetBackgroundActiveStateReq_CmdId[ChangeWidgetBackgroundActiveStateReq_CmdId["CMD_ID"] = 5907] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWidgetBackgroundActiveStateReq_CmdId[ChangeWidgetBackgroundActiveStateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWidgetBackgroundActiveStateReq_CmdId[ChangeWidgetBackgroundActiveStateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWidgetBackgroundActiveStateReq_CmdId[ChangeWidgetBackgroundActiveStateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeWidgetBackgroundActiveStateReq_CmdId = exports.ChangeWidgetBackgroundActiveStateReq_CmdId || (exports.ChangeWidgetBackgroundActiveStateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeWidgetBackgroundActiveStateRsp.CmdId
 */
var ChangeWidgetBackgroundActiveStateRsp_CmdId;
(function (ChangeWidgetBackgroundActiveStateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWidgetBackgroundActiveStateRsp_CmdId[ChangeWidgetBackgroundActiveStateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6060;
     */
    ChangeWidgetBackgroundActiveStateRsp_CmdId[ChangeWidgetBackgroundActiveStateRsp_CmdId["CMD_ID"] = 6060] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWidgetBackgroundActiveStateRsp_CmdId[ChangeWidgetBackgroundActiveStateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWidgetBackgroundActiveStateRsp_CmdId[ChangeWidgetBackgroundActiveStateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeWidgetBackgroundActiveStateRsp_CmdId = exports.ChangeWidgetBackgroundActiveStateRsp_CmdId || (exports.ChangeWidgetBackgroundActiveStateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AllWidgetBackgroundActiveStateNotify.CmdId
 */
var AllWidgetBackgroundActiveStateNotify_CmdId;
(function (AllWidgetBackgroundActiveStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllWidgetBackgroundActiveStateNotify_CmdId[AllWidgetBackgroundActiveStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6092;
     */
    AllWidgetBackgroundActiveStateNotify_CmdId[AllWidgetBackgroundActiveStateNotify_CmdId["CMD_ID"] = 6092] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllWidgetBackgroundActiveStateNotify_CmdId[AllWidgetBackgroundActiveStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllWidgetBackgroundActiveStateNotify_CmdId[AllWidgetBackgroundActiveStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AllWidgetBackgroundActiveStateNotify_CmdId = exports.AllWidgetBackgroundActiveStateNotify_CmdId || (exports.AllWidgetBackgroundActiveStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemotePlayerWidgetNotify.CmdId
 */
var RemotePlayerWidgetNotify_CmdId;
(function (RemotePlayerWidgetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemotePlayerWidgetNotify_CmdId[RemotePlayerWidgetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5995;
     */
    RemotePlayerWidgetNotify_CmdId[RemotePlayerWidgetNotify_CmdId["CMD_ID"] = 5995] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemotePlayerWidgetNotify_CmdId[RemotePlayerWidgetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemotePlayerWidgetNotify_CmdId[RemotePlayerWidgetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RemotePlayerWidgetNotify_CmdId = exports.RemotePlayerWidgetNotify_CmdId || (exports.RemotePlayerWidgetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LunchBoxSlotType
 */
var LunchBoxSlotType;
(function (LunchBoxSlotType) {
    /**
     * @generated from protobuf enum value: LUNCH_BOX_SLOT_NONE = 0;
     */
    LunchBoxSlotType[LunchBoxSlotType["LUNCH_BOX_SLOT_NONE"] = 0] = "LUNCH_BOX_SLOT_NONE";
    /**
     * @generated from protobuf enum value: LUNCH_BOX_SLOT_REVIVE = 1;
     */
    LunchBoxSlotType[LunchBoxSlotType["LUNCH_BOX_SLOT_REVIVE"] = 1] = "LUNCH_BOX_SLOT_REVIVE";
    /**
     * @generated from protobuf enum value: LUNCH_BOX_SLOT_HEAL = 2;
     */
    LunchBoxSlotType[LunchBoxSlotType["LUNCH_BOX_SLOT_HEAL"] = 2] = "LUNCH_BOX_SLOT_HEAL";
})(LunchBoxSlotType = exports.LunchBoxSlotType || (exports.LunchBoxSlotType = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetSlotTag
 */
var WidgetSlotTag;
(function (WidgetSlotTag) {
    /**
     * @generated from protobuf enum value: WIDGET_SLOT_QUICK_USE = 0;
     */
    WidgetSlotTag[WidgetSlotTag["WIDGET_SLOT_QUICK_USE"] = 0] = "WIDGET_SLOT_QUICK_USE";
    /**
     * @generated from protobuf enum value: WIDGET_SLOT_ATTACH_AVATAR = 1;
     */
    WidgetSlotTag[WidgetSlotTag["WIDGET_SLOT_ATTACH_AVATAR"] = 1] = "WIDGET_SLOT_ATTACH_AVATAR";
})(WidgetSlotTag = exports.WidgetSlotTag || (exports.WidgetSlotTag = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetSlotOp
 */
var WidgetSlotOp;
(function (WidgetSlotOp) {
    /**
     * @generated from protobuf enum value: WIDGET_SLOT_OP_ATTACH = 0;
     */
    WidgetSlotOp[WidgetSlotOp["ATTACH"] = 0] = "ATTACH";
    /**
     * @generated from protobuf enum value: WIDGET_SLOT_OP_DETACH = 1;
     */
    WidgetSlotOp[WidgetSlotOp["DETACH"] = 1] = "DETACH";
})(WidgetSlotOp = exports.WidgetSlotOp || (exports.WidgetSlotOp = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetCreatorOpType
 */
var WidgetCreatorOpType;
(function (WidgetCreatorOpType) {
    /**
     * @generated from protobuf enum value: WIDGET_CREATOR_TYPE_NONE = 0;
     */
    WidgetCreatorOpType[WidgetCreatorOpType["WIDGET_CREATOR_TYPE_NONE"] = 0] = "WIDGET_CREATOR_TYPE_NONE";
    /**
     * @generated from protobuf enum value: WIDGET_CREATOR_TYPE_RETRACT = 1;
     */
    WidgetCreatorOpType[WidgetCreatorOpType["WIDGET_CREATOR_TYPE_RETRACT"] = 1] = "WIDGET_CREATOR_TYPE_RETRACT";
    /**
     * @generated from protobuf enum value: WIDGET_CREATOR_TYPE_RETRACT_AND_CREATE = 2;
     */
    WidgetCreatorOpType[WidgetCreatorOpType["WIDGET_CREATOR_TYPE_RETRACT_AND_CREATE"] = 2] = "WIDGET_CREATOR_TYPE_RETRACT_AND_CREATE";
})(WidgetCreatorOpType = exports.WidgetCreatorOpType || (exports.WidgetCreatorOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.WIDGET_EXTRA_CD_TYPE
 */
var WIDGET_EXTRA_CD_TYPE;
(function (WIDGET_EXTRA_CD_TYPE) {
    /**
     * @generated from protobuf enum value: WIDGET_EXTRA_CD_TYPE_NONE = 0;
     */
    WIDGET_EXTRA_CD_TYPE[WIDGET_EXTRA_CD_TYPE["WIDGET_EXTRA_CD_TYPE_NONE"] = 0] = "WIDGET_EXTRA_CD_TYPE_NONE";
    /**
     * @generated from protobuf enum value: WIDGET_EXTRA_CD_TYPE_E_SKILL_SHARED = 1;
     */
    WIDGET_EXTRA_CD_TYPE[WIDGET_EXTRA_CD_TYPE["WIDGET_EXTRA_CD_TYPE_E_SKILL_SHARED"] = 1] = "WIDGET_EXTRA_CD_TYPE_E_SKILL_SHARED";
})(WIDGET_EXTRA_CD_TYPE = exports.WIDGET_EXTRA_CD_TYPE || (exports.WIDGET_EXTRA_CD_TYPE = {}));
/**
 * @generated from protobuf enum com.midnights.game.FireworksReformParamType
 */
var FireworksReformParamType;
(function (FireworksReformParamType) {
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_NONE = 0;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_NONE"] = 0] = "FIREWORKS_REFORM_PARAM_NONE";
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_COLOR = 1;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_COLOR"] = 1] = "FIREWORKS_REFORM_PARAM_COLOR";
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_HEIGHT = 2;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_HEIGHT"] = 2] = "FIREWORKS_REFORM_PARAM_HEIGHT";
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_SIZE = 3;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_SIZE"] = 3] = "FIREWORKS_REFORM_PARAM_SIZE";
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_DENSITY = 4;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_DENSITY"] = 4] = "FIREWORKS_REFORM_PARAM_DENSITY";
    /**
     * @generated from protobuf enum value: FIREWORKS_REFORM_PARAM_ROTATION = 5;
     */
    FireworksReformParamType[FireworksReformParamType["FIREWORKS_REFORM_PARAM_ROTATION"] = 5] = "FIREWORKS_REFORM_PARAM_ROTATION";
})(FireworksReformParamType = exports.FireworksReformParamType || (exports.FireworksReformParamType = {}));
/**
 * @generated from protobuf enum com.midnights.game.FireworksLaunchParamType
 */
var FireworksLaunchParamType;
(function (FireworksLaunchParamType) {
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_NONE = 0;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_NONE"] = 0] = "FIREWORKS_LAUNCH_PARAM_NONE";
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_REPEAT = 1;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_REPEAT"] = 1] = "FIREWORKS_LAUNCH_PARAM_REPEAT";
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_INTEVAL = 2;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_INTEVAL"] = 2] = "FIREWORKS_LAUNCH_PARAM_INTEVAL";
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_DELAY = 3;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_DELAY"] = 3] = "FIREWORKS_LAUNCH_PARAM_DELAY";
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_ROUND_INTEVAL = 4;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_ROUND_INTEVAL"] = 4] = "FIREWORKS_LAUNCH_PARAM_ROUND_INTEVAL";
    /**
     * @generated from protobuf enum value: FIREWORKS_LAUNCH_PARAM_MAX = 5;
     */
    FireworksLaunchParamType[FireworksLaunchParamType["FIREWORKS_LAUNCH_PARAM_MAX"] = 5] = "FIREWORKS_LAUNCH_PARAM_MAX";
})(FireworksLaunchParamType = exports.FireworksLaunchParamType || (exports.FireworksLaunchParamType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnchorPointData", [
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "anchor_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "pos", kind: "message", T: () => define_1.Vector },
            { no: 2, name: "rot", kind: "message", T: () => define_1.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 anchor_point_id */ 9:
                    message.anchorPointId = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 8:
                    message.endTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 15:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 anchor_point_id = 9; */
        if (message.anchorPointId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.anchorPointId);
        /* optional uint32 end_time = 8; */
        if (message.endTime !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional com.midnights.game.Vector pos = 15; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            define_1.Vector.internalBinaryWrite(message.rot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnchorPointData
 */
exports.AnchorPointData = new AnchorPointData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnchorPointDataNotify", [
            { no: 10, name: "anchor_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AnchorPointData },
            { no: 14, name: "next_usable_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { anchorPointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AnchorPointData anchor_point_list */ 10:
                    message.anchorPointList.push(exports.AnchorPointData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 next_usable_time */ 14:
                    message.nextUsableTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AnchorPointData anchor_point_list = 10; */
        for (let i = 0; i < message.anchorPointList.length; i++)
            exports.AnchorPointData.internalBinaryWrite(message.anchorPointList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 next_usable_time = 14; */
        if (message.nextUsableTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.nextUsableTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnchorPointDataNotify
 */
exports.AnchorPointDataNotify = new AnchorPointDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointOpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnchorPointOpReq", [
            { no: 9, name: "anchor_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "anchor_point_op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 anchor_point_id */ 9:
                    message.anchorPointId = reader.uint32();
                    break;
                case /* optional uint32 anchor_point_op_type */ 12:
                    message.anchorPointOpType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 anchor_point_id = 9; */
        if (message.anchorPointId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.anchorPointId);
        /* optional uint32 anchor_point_op_type = 12; */
        if (message.anchorPointOpType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.anchorPointOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnchorPointOpReq
 */
exports.AnchorPointOpReq = new AnchorPointOpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointOpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnchorPointOpRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "anchor_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "anchor_point_op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 anchor_point_id */ 12:
                    message.anchorPointId = reader.uint32();
                    break;
                case /* optional uint32 anchor_point_op_type */ 4:
                    message.anchorPointOpType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 anchor_point_id = 12; */
        if (message.anchorPointId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.anchorPointId);
        /* optional uint32 anchor_point_op_type = 4; */
        if (message.anchorPointOpType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.anchorPointOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnchorPointOpRsp
 */
exports.AnchorPointOpRsp = new AnchorPointOpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LunchBoxData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LunchBoxData", [
            { no: 3, name: "slot_material_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { slotMaterialMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> slot_material_map */ 3:
                    this.binaryReadMap3(message.slotMaterialMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.LunchBoxData.slot_material_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> slot_material_map = 3; */
        for (let k of Object.keys(message.slotMaterialMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.slotMaterialMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LunchBoxData
 */
exports.LunchBoxData = new LunchBoxData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetUpLunchBoxWidgetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetUpLunchBoxWidgetReq", [
            { no: 6, name: "lunch_box_data", kind: "message", T: () => exports.LunchBoxData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.LunchBoxData lunch_box_data */ 6:
                    message.lunchBoxData = exports.LunchBoxData.internalBinaryRead(reader, reader.uint32(), options, message.lunchBoxData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.LunchBoxData lunch_box_data = 6; */
        if (message.lunchBoxData)
            exports.LunchBoxData.internalBinaryWrite(message.lunchBoxData, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetUpLunchBoxWidgetReq
 */
exports.SetUpLunchBoxWidgetReq = new SetUpLunchBoxWidgetReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetUpLunchBoxWidgetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetUpLunchBoxWidgetRsp", [
            { no: 3, name: "lunch_box_data", kind: "message", T: () => exports.LunchBoxData },
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
                case /* optional com.midnights.game.LunchBoxData lunch_box_data */ 3:
                    message.lunchBoxData = exports.LunchBoxData.internalBinaryRead(reader, reader.uint32(), options, message.lunchBoxData);
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
        /* optional com.midnights.game.LunchBoxData lunch_box_data = 3; */
        if (message.lunchBoxData)
            exports.LunchBoxData.internalBinaryWrite(message.lunchBoxData, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.SetUpLunchBoxWidgetRsp
 */
exports.SetUpLunchBoxWidgetRsp = new SetUpLunchBoxWidgetRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OneoffGatherPointDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OneoffGatherPointDetectorData", [
            { no: 7, name: "hint_center_pos", kind: "message", T: () => define_1.Vector },
            { no: 14, name: "hint_radius", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_all_collected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "is_hint_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector hint_center_pos */ 7:
                    message.hintCenterPos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hintCenterPos);
                    break;
                case /* optional uint32 hint_radius */ 14:
                    message.hintRadius = reader.uint32();
                    break;
                case /* optional uint32 material_id */ 10:
                    message.materialId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 6:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 13:
                    message.groupId = reader.uint32();
                    break;
                case /* optional bool is_all_collected */ 4:
                    message.isAllCollected = reader.bool();
                    break;
                case /* optional bool is_hint_valid */ 15:
                    message.isHintValid = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector hint_center_pos = 7; */
        if (message.hintCenterPos)
            define_1.Vector.internalBinaryWrite(message.hintCenterPos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 hint_radius = 14; */
        if (message.hintRadius !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.hintRadius);
        /* optional uint32 material_id = 10; */
        if (message.materialId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional uint32 config_id = 6; */
        if (message.configId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 group_id = 13; */
        if (message.groupId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional bool is_all_collected = 4; */
        if (message.isAllCollected !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isAllCollected);
        /* optional bool is_hint_valid = 15; */
        if (message.isHintValid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isHintValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OneoffGatherPointDetectorData
 */
exports.OneoffGatherPointDetectorData = new OneoffGatherPointDetectorData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientCollectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientCollectorData", [
            { no: 10, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "curr_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 material_id */ 10:
                    message.materialId = reader.uint32();
                    break;
                case /* optional uint32 max_points */ 8:
                    message.maxPoints = reader.uint32();
                    break;
                case /* optional uint32 curr_points */ 13:
                    message.currPoints = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 material_id = 10; */
        if (message.materialId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional uint32 max_points = 8; */
        if (message.maxPoints !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.maxPoints);
        /* optional uint32 curr_points = 13; */
        if (message.currPoints !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.currPoints);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientCollectorData
 */
exports.ClientCollectorData = new ClientCollectorData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TreasureMapDetectorData", [
            { no: 4, name: "region_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "center_pos", kind: "message", T: () => define_1.Vector },
            { no: 6, name: "is_region_detected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "spot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.Vector },
            { no: 14, name: "radius", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { spotList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 region_id */ 4:
                    message.regionId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector center_pos */ 7:
                    message.centerPos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.centerPos);
                    break;
                case /* optional bool is_region_detected */ 6:
                    message.isRegionDetected = reader.bool();
                    break;
                case /* repeated com.midnights.game.Vector spot_list */ 10:
                    message.spotList.push(define_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 radius */ 14:
                    message.radius = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 region_id = 4; */
        if (message.regionId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.regionId);
        /* optional com.midnights.game.Vector center_pos = 7; */
        if (message.centerPos)
            define_1.Vector.internalBinaryWrite(message.centerPos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_region_detected = 6; */
        if (message.isRegionDetected !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isRegionDetected);
        /* repeated com.midnights.game.Vector spot_list = 10; */
        for (let i = 0; i < message.spotList.length; i++)
            define_1.Vector.internalBinaryWrite(message.spotList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 radius = 14; */
        if (message.radius !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.radius);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TreasureMapDetectorData
 */
exports.TreasureMapDetectorData = new TreasureMapDetectorData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SkyCrystalDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SkyCrystalDetectorData", [
            { no: 3, name: "is_hint_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "hint_center_pos", kind: "message", T: () => define_1.Vector },
            { no: 6, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_hint_valid */ 3:
                    message.isHintValid = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector hint_center_pos */ 8:
                    message.hintCenterPos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hintCenterPos);
                    break;
                case /* optional uint32 group_id */ 6:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 9:
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
        /* optional bool is_hint_valid = 3; */
        if (message.isHintValid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isHintValid);
        /* optional com.midnights.game.Vector hint_center_pos = 8; */
        if (message.hintCenterPos)
            define_1.Vector.internalBinaryWrite(message.hintCenterPos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 group_id = 6; */
        if (message.groupId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 9; */
        if (message.configId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SkyCrystalDetectorData
 */
exports.SkyCrystalDetectorData = new SkyCrystalDetectorData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SkyCrystalDetectorQuickUseResult$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SkyCrystalDetectorQuickUseResult", [
            { no: 9, name: "sky_crystal_detector_data", kind: "message", T: () => exports.SkyCrystalDetectorData },
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
                case /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data */ 9:
                    message.skyCrystalDetectorData = exports.SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
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
        /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data = 9; */
        if (message.skyCrystalDetectorData)
            exports.SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.SkyCrystalDetectorQuickUseResult
 */
exports.SkyCrystalDetectorQuickUseResult = new SkyCrystalDetectorQuickUseResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCameraInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCameraInfo", [
            { no: 4, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_entity_id */ 4:
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
        /* optional uint32 target_entity_id = 4; */
        if (message.targetEntityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCameraInfo
 */
exports.WidgetCameraInfo = new WidgetCameraInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetThunderBirdFeatherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetThunderBirdFeatherInfo", [
            { no: 4, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated uint32 entity_id_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 entity_id_list = 4; */
        if (message.entityIdList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetThunderBirdFeatherInfo
 */
exports.WidgetThunderBirdFeatherInfo = new WidgetThunderBirdFeatherInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuickUseWidgetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuickUseWidgetReq", [
            { no: 676, name: "location_info", kind: "message", oneof: "param", T: () => exports.WidgetCreateLocationInfo },
            { no: 478, name: "camera_info", kind: "message", oneof: "param", T: () => exports.WidgetCameraInfo },
            { no: 812, name: "creator_info", kind: "message", oneof: "param", T: () => exports.WidgetCreatorInfo },
            { no: 1859, name: "thunder_bird_feather_info", kind: "message", oneof: "param", T: () => exports.WidgetThunderBirdFeatherInfo }
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
                case /* com.midnights.game.WidgetCreateLocationInfo location_info */ 676:
                    message.param = {
                        oneofKind: "locationInfo",
                        locationInfo: exports.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.locationInfo)
                    };
                    break;
                case /* com.midnights.game.WidgetCameraInfo camera_info */ 478:
                    message.param = {
                        oneofKind: "cameraInfo",
                        cameraInfo: exports.WidgetCameraInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.cameraInfo)
                    };
                    break;
                case /* com.midnights.game.WidgetCreatorInfo creator_info */ 812:
                    message.param = {
                        oneofKind: "creatorInfo",
                        creatorInfo: exports.WidgetCreatorInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.creatorInfo)
                    };
                    break;
                case /* com.midnights.game.WidgetThunderBirdFeatherInfo thunder_bird_feather_info */ 1859:
                    message.param = {
                        oneofKind: "thunderBirdFeatherInfo",
                        thunderBirdFeatherInfo: exports.WidgetThunderBirdFeatherInfo.internalBinaryRead(reader, reader.uint32(), options, message.param.thunderBirdFeatherInfo)
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
        /* com.midnights.game.WidgetCreateLocationInfo location_info = 676; */
        if (message.param.oneofKind === "locationInfo")
            exports.WidgetCreateLocationInfo.internalBinaryWrite(message.param.locationInfo, writer.tag(676, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WidgetCameraInfo camera_info = 478; */
        if (message.param.oneofKind === "cameraInfo")
            exports.WidgetCameraInfo.internalBinaryWrite(message.param.cameraInfo, writer.tag(478, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WidgetCreatorInfo creator_info = 812; */
        if (message.param.oneofKind === "creatorInfo")
            exports.WidgetCreatorInfo.internalBinaryWrite(message.param.creatorInfo, writer.tag(812, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WidgetThunderBirdFeatherInfo thunder_bird_feather_info = 1859; */
        if (message.param.oneofKind === "thunderBirdFeatherInfo")
            exports.WidgetThunderBirdFeatherInfo.internalBinaryWrite(message.param.thunderBirdFeatherInfo, writer.tag(1859, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuickUseWidgetReq
 */
exports.QuickUseWidgetReq = new QuickUseWidgetReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuickUseWidgetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuickUseWidgetRsp", [
            { no: 6, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "detector_data", kind: "message", oneof: "param", T: () => exports.OneoffGatherPointDetectorData },
            { no: 15, name: "client_collector_data", kind: "message", oneof: "param", T: () => exports.ClientCollectorData },
            { no: 168922, name: "sky_crystal_detector_quick_use_result", kind: "message", oneof: "param", T: () => exports.SkyCrystalDetectorQuickUseResult }
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
                case /* optional uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* com.midnights.game.OneoffGatherPointDetectorData detector_data */ 3:
                    message.param = {
                        oneofKind: "detectorData",
                        detectorData: exports.OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.param.detectorData)
                    };
                    break;
                case /* com.midnights.game.ClientCollectorData client_collector_data */ 15:
                    message.param = {
                        oneofKind: "clientCollectorData",
                        clientCollectorData: exports.ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options, message.param.clientCollectorData)
                    };
                    break;
                case /* com.midnights.game.SkyCrystalDetectorQuickUseResult sky_crystal_detector_quick_use_result */ 168922:
                    message.param = {
                        oneofKind: "skyCrystalDetectorQuickUseResult",
                        skyCrystalDetectorQuickUseResult: exports.SkyCrystalDetectorQuickUseResult.internalBinaryRead(reader, reader.uint32(), options, message.param.skyCrystalDetectorQuickUseResult)
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
        /* optional uint32 material_id = 6; */
        if (message.materialId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* com.midnights.game.OneoffGatherPointDetectorData detector_data = 3; */
        if (message.param.oneofKind === "detectorData")
            exports.OneoffGatherPointDetectorData.internalBinaryWrite(message.param.detectorData, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ClientCollectorData client_collector_data = 15; */
        if (message.param.oneofKind === "clientCollectorData")
            exports.ClientCollectorData.internalBinaryWrite(message.param.clientCollectorData, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SkyCrystalDetectorQuickUseResult sky_crystal_detector_quick_use_result = 168922; */
        if (message.param.oneofKind === "skyCrystalDetectorQuickUseResult")
            exports.SkyCrystalDetectorQuickUseResult.internalBinaryWrite(message.param.skyCrystalDetectorQuickUseResult, writer.tag(168922, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuickUseWidgetRsp
 */
exports.QuickUseWidgetRsp = new QuickUseWidgetRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCoolDownData", [
            { no: 5, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "cool_down_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_success */ 5:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint64 cool_down_time */ 4:
                    message.coolDownTime = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 id */ 15:
                    message.id = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_success = 5; */
        if (message.isSuccess !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint64 cool_down_time = 4; */
        if (message.coolDownTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.coolDownTime);
        /* optional uint32 id = 15; */
        if (message.id !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCoolDownData
 */
exports.WidgetCoolDownData = new WidgetCoolDownData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCoolDownNotify", [
            { no: 1, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetCoolDownData },
            { no: 12, name: "group_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetCoolDownData }
        ]);
    }
    create(value) {
        const message = { normalCoolDownDataList: [], groupCoolDownDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetCoolDownData normal_cool_down_data_list */ 1:
                    message.normalCoolDownDataList.push(exports.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.WidgetCoolDownData group_cool_down_data_list */ 12:
                    message.groupCoolDownDataList.push(exports.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WidgetCoolDownData normal_cool_down_data_list = 1; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            exports.WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.WidgetCoolDownData group_cool_down_data_list = 12; */
        for (let i = 0; i < message.groupCoolDownDataList.length; i++)
            exports.WidgetCoolDownData.internalBinaryWrite(message.groupCoolDownDataList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCoolDownNotify
 */
exports.WidgetCoolDownNotify = new WidgetCoolDownNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetReportReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetReportReq", [
            { no: 5, name: "is_clear_sky_crystal_hint", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_client_collect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_clear_hint", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_clear_sky_crystal_hint */ 5:
                    message.isClearSkyCrystalHint = reader.bool();
                    break;
                case /* optional bool is_client_collect */ 14:
                    message.isClientCollect = reader.bool();
                    break;
                case /* optional bool is_clear_hint */ 13:
                    message.isClearHint = reader.bool();
                    break;
                case /* optional uint32 material_id */ 15:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_clear_sky_crystal_hint = 5; */
        if (message.isClearSkyCrystalHint !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isClearSkyCrystalHint);
        /* optional bool is_client_collect = 14; */
        if (message.isClientCollect !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isClientCollect);
        /* optional bool is_clear_hint = 13; */
        if (message.isClearHint !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isClearHint);
        /* optional uint32 material_id = 15; */
        if (message.materialId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetReportReq
 */
exports.WidgetReportReq = new WidgetReportReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetReportRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetReportRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 material_id */ 4:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 material_id = 4; */
        if (message.materialId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetReportRsp
 */
exports.WidgetReportRsp = new WidgetReportRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientCollectorDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientCollectorDataNotify", [
            { no: 13, name: "client_collector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ClientCollectorData }
        ]);
    }
    create(value) {
        const message = { clientCollectorDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ClientCollectorData client_collector_data_list */ 13:
                    message.clientCollectorDataList.push(exports.ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ClientCollectorData client_collector_data_list = 13; */
        for (let i = 0; i < message.clientCollectorDataList.length; i++)
            exports.ClientCollectorData.internalBinaryWrite(message.clientCollectorDataList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientCollectorDataNotify
 */
exports.ClientCollectorDataNotify = new ClientCollectorDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OneoffGatherPointDetectorDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OneoffGatherPointDetectorDataNotify", [
            { no: 3, name: "oneoff_gather_point_detector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.OneoffGatherPointDetectorData }
        ]);
    }
    create(value) {
        const message = { oneoffGatherPointDetectorDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list */ 3:
                    message.oneoffGatherPointDetectorDataList.push(exports.OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list = 3; */
        for (let i = 0; i < message.oneoffGatherPointDetectorDataList.length; i++)
            exports.OneoffGatherPointDetectorData.internalBinaryWrite(message.oneoffGatherPointDetectorDataList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OneoffGatherPointDetectorDataNotify
 */
exports.OneoffGatherPointDetectorDataNotify = new OneoffGatherPointDetectorDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SkyCrystalDetectorDataUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SkyCrystalDetectorDataUpdateNotify", [
            { no: 9, name: "sky_crystal_detector_data", kind: "message", T: () => exports.SkyCrystalDetectorData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data */ 9:
                    message.skyCrystalDetectorData = exports.SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data = 9; */
        if (message.skyCrystalDetectorData)
            exports.SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SkyCrystalDetectorDataUpdateNotify
 */
exports.SkyCrystalDetectorDataUpdateNotify = new SkyCrystalDetectorDataUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapDetectorDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TreasureMapDetectorDataNotify", [
            { no: 2, name: "data", kind: "message", T: () => exports.TreasureMapDetectorData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TreasureMapDetectorData data */ 2:
                    message.data = exports.TreasureMapDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.TreasureMapDetectorData data = 2; */
        if (message.data)
            exports.TreasureMapDetectorData.internalBinaryWrite(message.data, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TreasureMapDetectorDataNotify
 */
exports.TreasureMapDetectorDataNotify = new TreasureMapDetectorDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetSlotData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetSlotData", [
            { no: 9, name: "cd_over_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "tag", kind: "enum", opt: true, T: () => ["com.midnights.game.WidgetSlotTag", WidgetSlotTag] },
            { no: 11, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_active", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cd_over_time */ 9:
                    message.cdOverTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.WidgetSlotTag tag */ 14:
                    message.tag = reader.int32();
                    break;
                case /* optional uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                case /* optional bool is_active */ 12:
                    message.isActive = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cd_over_time = 9; */
        if (message.cdOverTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cdOverTime);
        /* optional com.midnights.game.WidgetSlotTag tag = 14; */
        if (message.tag !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.tag);
        /* optional uint32 material_id = 11; */
        if (message.materialId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional bool is_active = 12; */
        if (message.isActive !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isActive);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetSlotData
 */
exports.WidgetSlotData = new WidgetSlotData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetWidgetSlotReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetWidgetSlotReq", [
            { no: 15, name: "tag_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.WidgetSlotTag", WidgetSlotTag] },
            { no: 6, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "op", kind: "enum", opt: true, T: () => ["com.midnights.game.WidgetSlotOp", WidgetSlotOp, "WIDGET_SLOT_OP_"] }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetSlotTag tag_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.int32());
                    else
                        message.tagList.push(reader.int32());
                    break;
                case /* optional uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                case /* optional com.midnights.game.WidgetSlotOp op */ 2:
                    message.op = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WidgetSlotTag tag_list = 15; */
        if (message.tagList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.int32(message.tagList[i]);
            writer.join();
        }
        /* optional uint32 material_id = 6; */
        if (message.materialId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional com.midnights.game.WidgetSlotOp op = 2; */
        if (message.op !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.op);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetWidgetSlotReq
 */
exports.SetWidgetSlotReq = new SetWidgetSlotReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetWidgetSlotRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetWidgetSlotRsp", [
            { no: 15, name: "tag_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.WidgetSlotTag", WidgetSlotTag] },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "op", kind: "enum", opt: true, T: () => ["com.midnights.game.WidgetSlotOp", WidgetSlotOp, "WIDGET_SLOT_OP_"] }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetSlotTag tag_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.int32());
                    else
                        message.tagList.push(reader.int32());
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 material_id */ 1:
                    message.materialId = reader.uint32();
                    break;
                case /* optional com.midnights.game.WidgetSlotOp op */ 4:
                    message.op = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WidgetSlotTag tag_list = 15; */
        if (message.tagList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.int32(message.tagList[i]);
            writer.join();
        }
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 material_id = 1; */
        if (message.materialId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional com.midnights.game.WidgetSlotOp op = 4; */
        if (message.op !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.op);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetWidgetSlotRsp
 */
exports.SetWidgetSlotRsp = new SetWidgetSlotRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetSlotChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetSlotChangeNotify", [
            { no: 11, name: "op", kind: "enum", opt: true, T: () => ["com.midnights.game.WidgetSlotOp", WidgetSlotOp, "WIDGET_SLOT_OP_"] },
            { no: 8, name: "slot", kind: "message", T: () => exports.WidgetSlotData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.WidgetSlotOp op */ 11:
                    message.op = reader.int32();
                    break;
                case /* optional com.midnights.game.WidgetSlotData slot */ 8:
                    message.slot = exports.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options, message.slot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.WidgetSlotOp op = 11; */
        if (message.op !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.op);
        /* optional com.midnights.game.WidgetSlotData slot = 8; */
        if (message.slot)
            exports.WidgetSlotData.internalBinaryWrite(message.slot, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetSlotChangeNotify
 */
exports.WidgetSlotChangeNotify = new WidgetSlotChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWidgetSlotReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetWidgetSlotReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetWidgetSlotReq
 */
exports.GetWidgetSlotReq = new GetWidgetSlotReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWidgetSlotRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetWidgetSlotRsp", [
            { no: 13, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetSlotData },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { slotList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetSlotData slot_list */ 13:
                    message.slotList.push(exports.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.WidgetSlotData slot_list = 13; */
        for (let i = 0; i < message.slotList.length; i++)
            exports.WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetWidgetSlotRsp
 */
exports.GetWidgetSlotRsp = new GetWidgetSlotRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllWidgetDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllWidgetDataNotify", [
            { no: 11, name: "background_active_widget_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "lunch_box_data", kind: "message", T: () => exports.LunchBoxData },
            { no: 13, name: "cool_down_group_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetCoolDownData },
            { no: 3, name: "anchor_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AnchorPointData },
            { no: 6, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetSlotData },
            { no: 10, name: "next_anchor_point_usable_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "client_collector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ClientCollectorData },
            { no: 15, name: "oneoff_gather_point_detector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.OneoffGatherPointDetectorData },
            { no: 9, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetCoolDownData },
            { no: 12, name: "sky_crystal_detector_data", kind: "message", T: () => exports.SkyCrystalDetectorData }
        ]);
    }
    create(value) {
        const message = { backgroundActiveWidgetList: [], coolDownGroupDataList: [], anchorPointList: [], slotList: [], clientCollectorDataList: [], oneoffGatherPointDetectorDataList: [], normalCoolDownDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 background_active_widget_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backgroundActiveWidgetList.push(reader.uint32());
                    else
                        message.backgroundActiveWidgetList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.LunchBoxData lunch_box_data */ 1:
                    message.lunchBoxData = exports.LunchBoxData.internalBinaryRead(reader, reader.uint32(), options, message.lunchBoxData);
                    break;
                case /* repeated com.midnights.game.WidgetCoolDownData cool_down_group_data_list */ 13:
                    message.coolDownGroupDataList.push(exports.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.AnchorPointData anchor_point_list */ 3:
                    message.anchorPointList.push(exports.AnchorPointData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.WidgetSlotData slot_list */ 6:
                    message.slotList.push(exports.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 next_anchor_point_usable_time */ 10:
                    message.nextAnchorPointUsableTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ClientCollectorData client_collector_data_list */ 4:
                    message.clientCollectorDataList.push(exports.ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list */ 15:
                    message.oneoffGatherPointDetectorDataList.push(exports.OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.WidgetCoolDownData normal_cool_down_data_list */ 9:
                    message.normalCoolDownDataList.push(exports.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data */ 12:
                    message.skyCrystalDetectorData = exports.SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 background_active_widget_list = 11; */
        if (message.backgroundActiveWidgetList.length) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backgroundActiveWidgetList.length; i++)
                writer.uint32(message.backgroundActiveWidgetList[i]);
            writer.join();
        }
        /* optional com.midnights.game.LunchBoxData lunch_box_data = 1; */
        if (message.lunchBoxData)
            exports.LunchBoxData.internalBinaryWrite(message.lunchBoxData, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.WidgetCoolDownData cool_down_group_data_list = 13; */
        for (let i = 0; i < message.coolDownGroupDataList.length; i++)
            exports.WidgetCoolDownData.internalBinaryWrite(message.coolDownGroupDataList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AnchorPointData anchor_point_list = 3; */
        for (let i = 0; i < message.anchorPointList.length; i++)
            exports.AnchorPointData.internalBinaryWrite(message.anchorPointList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.WidgetSlotData slot_list = 6; */
        for (let i = 0; i < message.slotList.length; i++)
            exports.WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 next_anchor_point_usable_time = 10; */
        if (message.nextAnchorPointUsableTime !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.nextAnchorPointUsableTime);
        /* repeated com.midnights.game.ClientCollectorData client_collector_data_list = 4; */
        for (let i = 0; i < message.clientCollectorDataList.length; i++)
            exports.ClientCollectorData.internalBinaryWrite(message.clientCollectorDataList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list = 15; */
        for (let i = 0; i < message.oneoffGatherPointDetectorDataList.length; i++)
            exports.OneoffGatherPointDetectorData.internalBinaryWrite(message.oneoffGatherPointDetectorDataList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.WidgetCoolDownData normal_cool_down_data_list = 9; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            exports.WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.SkyCrystalDetectorData sky_crystal_detector_data = 12; */
        if (message.skyCrystalDetectorData)
            exports.SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllWidgetDataNotify
 */
exports.AllWidgetDataNotify = new AllWidgetDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseWidgetCreateGadgetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseWidgetCreateGadgetReq", [
            { no: 15, name: "pos", kind: "message", T: () => define_1.Vector },
            { no: 12, name: "rot", kind: "message", T: () => define_1.Vector },
            { no: 4, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 15:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 12:
                    message.rot = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional uint32 material_id */ 4:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 15; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 12; */
        if (message.rot)
            define_1.Vector.internalBinaryWrite(message.rot, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 material_id = 4; */
        if (message.materialId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UseWidgetCreateGadgetReq
 */
exports.UseWidgetCreateGadgetReq = new UseWidgetCreateGadgetReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseWidgetCreateGadgetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseWidgetCreateGadgetRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 material_id */ 12:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 material_id = 12; */
        if (message.materialId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UseWidgetCreateGadgetRsp
 */
exports.UseWidgetCreateGadgetRsp = new UseWidgetCreateGadgetRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseWidgetRetractGadgetReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseWidgetRetractGadgetReq", [
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
 * @generated MessageType for protobuf message com.midnights.game.UseWidgetRetractGadgetReq
 */
exports.UseWidgetRetractGadgetReq = new UseWidgetRetractGadgetReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseWidgetRetractGadgetRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseWidgetRetractGadgetRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
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
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
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
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
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
 * @generated MessageType for protobuf message com.midnights.game.UseWidgetRetractGadgetRsp
 */
exports.UseWidgetRetractGadgetRsp = new UseWidgetRetractGadgetRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetGadgetData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetGadgetData", [
            { no: 1, name: "gadget_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gadgetEntityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 gadget_entity_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.gadgetEntityIdList.push(reader.uint32());
                    else
                        message.gadgetEntityIdList.push(reader.uint32());
                    break;
                case /* optional uint32 gadget_id */ 8:
                    message.gadgetId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 gadget_entity_id_list = 1; */
        if (message.gadgetEntityIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.gadgetEntityIdList.length; i++)
                writer.uint32(message.gadgetEntityIdList[i]);
            writer.join();
        }
        /* optional uint32 gadget_id = 8; */
        if (message.gadgetId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetGadgetData
 */
exports.WidgetGadgetData = new WidgetGadgetData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetGadgetAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetGadgetAllDataNotify", [
            { no: 13, name: "widget_gadget_data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetGadgetData }
        ]);
    }
    create(value) {
        const message = { widgetGadgetData: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetGadgetData widget_gadget_data */ 13:
                    message.widgetGadgetData.push(exports.WidgetGadgetData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WidgetGadgetData widget_gadget_data = 13; */
        for (let i = 0; i < message.widgetGadgetData.length; i++)
            exports.WidgetGadgetData.internalBinaryWrite(message.widgetGadgetData[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetGadgetAllDataNotify
 */
exports.WidgetGadgetAllDataNotify = new WidgetGadgetAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetGadgetDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetGadgetDataNotify", [
            { no: 12, name: "widget_gadget_data", kind: "message", T: () => exports.WidgetGadgetData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.WidgetGadgetData widget_gadget_data */ 12:
                    message.widgetGadgetData = exports.WidgetGadgetData.internalBinaryRead(reader, reader.uint32(), options, message.widgetGadgetData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.WidgetGadgetData widget_gadget_data = 12; */
        if (message.widgetGadgetData)
            exports.WidgetGadgetData.internalBinaryWrite(message.widgetGadgetData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetGadgetDataNotify
 */
exports.WidgetGadgetDataNotify = new WidgetGadgetDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetGadgetDestroyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetGadgetDestroyNotify", [
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
 * @generated MessageType for protobuf message com.midnights.game.WidgetGadgetDestroyNotify
 */
exports.WidgetGadgetDestroyNotify = new WidgetGadgetDestroyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCreateLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCreateLocationInfo", [
            { no: 3, name: "rot", kind: "message", T: () => define_1.Vector },
            { no: 10, name: "pos", kind: "message", T: () => define_1.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                    message.rot = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
            define_1.Vector.internalBinaryWrite(message.rot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCreateLocationInfo
 */
exports.WidgetCreateLocationInfo = new WidgetCreateLocationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCreatorInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCreatorInfo", [
            { no: 10, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.WidgetCreatorOpType", WidgetCreatorOpType] },
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "location_info", kind: "message", T: () => exports.WidgetCreateLocationInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.WidgetCreatorOpType op_type */ 10:
                    message.opType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.WidgetCreateLocationInfo location_info */ 12:
                    message.locationInfo = exports.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.locationInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.WidgetCreatorOpType op_type = 10; */
        if (message.opType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.opType);
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.WidgetCreateLocationInfo location_info = 12; */
        if (message.locationInfo)
            exports.WidgetCreateLocationInfo.internalBinaryWrite(message.locationInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCreatorInfo
 */
exports.WidgetCreatorInfo = new WidgetCreatorInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetDoBagReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetDoBagReq", [
            { no: 9, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 832, name: "location_info", kind: "message", oneof: "opInfo", T: () => exports.WidgetCreateLocationInfo },
            { no: 1497, name: "widget_creator_info", kind: "message", oneof: "opInfo", T: () => exports.WidgetCreatorInfo }
        ]);
    }
    create(value) {
        const message = { opInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 material_id */ 9:
                    message.materialId = reader.uint32();
                    break;
                case /* com.midnights.game.WidgetCreateLocationInfo location_info */ 832:
                    message.opInfo = {
                        oneofKind: "locationInfo",
                        locationInfo: exports.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.opInfo.locationInfo)
                    };
                    break;
                case /* com.midnights.game.WidgetCreatorInfo widget_creator_info */ 1497:
                    message.opInfo = {
                        oneofKind: "widgetCreatorInfo",
                        widgetCreatorInfo: exports.WidgetCreatorInfo.internalBinaryRead(reader, reader.uint32(), options, message.opInfo.widgetCreatorInfo)
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
        /* optional uint32 material_id = 9; */
        if (message.materialId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.materialId);
        /* com.midnights.game.WidgetCreateLocationInfo location_info = 832; */
        if (message.opInfo.oneofKind === "locationInfo")
            exports.WidgetCreateLocationInfo.internalBinaryWrite(message.opInfo.locationInfo, writer.tag(832, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WidgetCreatorInfo widget_creator_info = 1497; */
        if (message.opInfo.oneofKind === "widgetCreatorInfo")
            exports.WidgetCreatorInfo.internalBinaryWrite(message.opInfo.widgetCreatorInfo, writer.tag(1497, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetDoBagReq
 */
exports.WidgetDoBagReq = new WidgetDoBagReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetDoBagRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetDoBagRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 material_id */ 3:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 material_id = 3; */
        if (message.materialId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetDoBagRsp
 */
exports.WidgetDoBagRsp = new WidgetDoBagRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetActiveChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetActiveChangeNotify", [
            { no: 5, name: "widget_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetSlotData }
        ]);
    }
    create(value) {
        const message = { widgetDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WidgetSlotData widget_data_list */ 5:
                    message.widgetDataList.push(exports.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WidgetSlotData widget_data_list = 5; */
        for (let i = 0; i < message.widgetDataList.length; i++)
            exports.WidgetSlotData.internalBinaryWrite(message.widgetDataList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetActiveChangeNotify
 */
exports.WidgetActiveChangeNotify = new WidgetActiveChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUseAttachAbilityGroupChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetUseAttachAbilityGroupChangeNotify", [
            { no: 6, name: "is_attach", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_attach */ 6:
                    message.isAttach = reader.bool();
                    break;
                case /* optional uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_attach = 6; */
        if (message.isAttach !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAttach);
        /* optional uint32 material_id = 11; */
        if (message.materialId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetUseAttachAbilityGroupChangeNotify
 */
exports.WidgetUseAttachAbilityGroupChangeNotify = new WidgetUseAttachAbilityGroupChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCaptureAnimalReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCaptureAnimalReq", [
            { no: 10, name: "pos", kind: "message", T: () => define_1.Vector },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 material_id = 6; */
        if (message.materialId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCaptureAnimalReq
 */
exports.WidgetCaptureAnimalReq = new WidgetCaptureAnimalReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCaptureAnimalRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetCaptureAnimalRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "pos", kind: "message", T: () => define_1.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 material_id */ 8:
                    message.materialId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 material_id = 8; */
        if (message.materialId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetCaptureAnimalRsp
 */
exports.WidgetCaptureAnimalRsp = new WidgetCaptureAnimalRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUpdateExtraCDReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetUpdateExtraCDReq", [
            { no: 14, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "extra_cd_type", kind: "enum", opt: true, T: () => ["com.midnights.game.WIDGET_EXTRA_CD_TYPE", WIDGET_EXTRA_CD_TYPE] },
            { no: 7, name: "cd_group", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 material_id */ 14:
                    message.materialId = reader.uint32();
                    break;
                case /* optional com.midnights.game.WIDGET_EXTRA_CD_TYPE extra_cd_type */ 10:
                    message.extraCdType = reader.int32();
                    break;
                case /* optional uint32 cd_group */ 7:
                    message.cdGroup = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 material_id = 14; */
        if (message.materialId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional com.midnights.game.WIDGET_EXTRA_CD_TYPE extra_cd_type = 10; */
        if (message.extraCdType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.extraCdType);
        /* optional uint32 cd_group = 7; */
        if (message.cdGroup !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.cdGroup);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetUpdateExtraCDReq
 */
exports.WidgetUpdateExtraCDReq = new WidgetUpdateExtraCDReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetUpdateExtraCDRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetUpdateExtraCDRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "extra_cd_type", kind: "enum", opt: true, T: () => ["com.midnights.game.WIDGET_EXTRA_CD_TYPE", WIDGET_EXTRA_CD_TYPE] },
            { no: 10, name: "cool_data", kind: "message", T: () => exports.WidgetCoolDownData },
            { no: 15, name: "cd_group", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                case /* optional com.midnights.game.WIDGET_EXTRA_CD_TYPE extra_cd_type */ 6:
                    message.extraCdType = reader.int32();
                    break;
                case /* optional com.midnights.game.WidgetCoolDownData cool_data */ 10:
                    message.coolData = exports.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options, message.coolData);
                    break;
                case /* optional uint32 cd_group */ 15:
                    message.cdGroup = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 material_id = 11; */
        if (message.materialId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.materialId);
        /* optional com.midnights.game.WIDGET_EXTRA_CD_TYPE extra_cd_type = 6; */
        if (message.extraCdType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.extraCdType);
        /* optional com.midnights.game.WidgetCoolDownData cool_data = 10; */
        if (message.coolData)
            exports.WidgetCoolDownData.internalBinaryWrite(message.coolData, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cd_group = 15; */
        if (message.cdGroup !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cdGroup);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetUpdateExtraCDRsp
 */
exports.WidgetUpdateExtraCDRsp = new WidgetUpdateExtraCDRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksReformParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksReformParam", [
            { no: 8, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.FireworksReformParamType", FireworksReformParamType] },
            { no: 4, name: "value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FireworksReformParamType type */ 8:
                    message.type = reader.int32();
                    break;
                case /* optional int32 value */ 4:
                    message.value = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FireworksReformParamType type = 8; */
        if (message.type !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.type);
        /* optional int32 value = 4; */
        if (message.value !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksReformParam
 */
exports.FireworksReformParam = new FireworksReformParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksReformData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksReformData", [
            { no: 13, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "reform_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FireworksReformParam }
        ]);
    }
    create(value) {
        const message = { reformParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 13:
                    message.id = reader.uint32();
                    break;
                case /* repeated com.midnights.game.FireworksReformParam reform_param_list */ 10:
                    message.reformParamList.push(exports.FireworksReformParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 id = 13; */
        if (message.id !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.id);
        /* repeated com.midnights.game.FireworksReformParam reform_param_list = 10; */
        for (let i = 0; i < message.reformParamList.length; i++)
            exports.FireworksReformParam.internalBinaryWrite(message.reformParamList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksReformData
 */
exports.FireworksReformData = new FireworksReformData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksReformDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksReformDataNotify", [
            { no: 6, name: "fireworks_reform_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FireworksReformData }
        ]);
    }
    create(value) {
        const message = { fireworksReformDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FireworksReformData fireworks_reform_data_list */ 6:
                    message.fireworksReformDataList.push(exports.FireworksReformData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.FireworksReformData fireworks_reform_data_list = 6; */
        for (let i = 0; i < message.fireworksReformDataList.length; i++)
            exports.FireworksReformData.internalBinaryWrite(message.fireworksReformDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksReformDataNotify
 */
exports.FireworksReformDataNotify = new FireworksReformDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReformFireworksReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReformFireworksReq", [
            { no: 3, name: "fireworks_reform_data", kind: "message", T: () => exports.FireworksReformData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FireworksReformData fireworks_reform_data */ 3:
                    message.fireworksReformData = exports.FireworksReformData.internalBinaryRead(reader, reader.uint32(), options, message.fireworksReformData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FireworksReformData fireworks_reform_data = 3; */
        if (message.fireworksReformData)
            exports.FireworksReformData.internalBinaryWrite(message.fireworksReformData, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReformFireworksReq
 */
exports.ReformFireworksReq = new ReformFireworksReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReformFireworksRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReformFireworksRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ReformFireworksRsp
 */
exports.ReformFireworksRsp = new ReformFireworksRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksLaunchParam", [
            { no: 5, name: "value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.FireworksLaunchParamType", FireworksLaunchParamType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 value */ 5:
                    message.value = reader.int32();
                    break;
                case /* optional com.midnights.game.FireworksLaunchParamType type */ 4:
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
        /* optional int32 value = 5; */
        if (message.value !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.value);
        /* optional com.midnights.game.FireworksLaunchParamType type = 4; */
        if (message.type !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksLaunchParam
 */
exports.FireworksLaunchParam = new FireworksLaunchParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchSchemeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksLaunchSchemeData", [
            { no: 3, name: "scheme_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fireworks_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "launch_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FireworksLaunchParam }
        ]);
    }
    create(value) {
        const message = { fireworksIdList: [], launchParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scheme_id */ 3:
                    message.schemeId = reader.uint32();
                    break;
                case /* repeated uint32 fireworks_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fireworksIdList.push(reader.uint32());
                    else
                        message.fireworksIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.FireworksLaunchParam launch_param_list */ 7:
                    message.launchParamList.push(exports.FireworksLaunchParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scheme_id = 3; */
        if (message.schemeId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.schemeId);
        /* repeated uint32 fireworks_id_list = 2; */
        if (message.fireworksIdList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fireworksIdList.length; i++)
                writer.uint32(message.fireworksIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.FireworksLaunchParam launch_param_list = 7; */
        for (let i = 0; i < message.launchParamList.length; i++)
            exports.FireworksLaunchParam.internalBinaryWrite(message.launchParamList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksLaunchSchemeData
 */
exports.FireworksLaunchSchemeData = new FireworksLaunchSchemeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LaunchFireworksReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LaunchFireworksReq", [
            { no: 13, name: "scheme_data", kind: "message", T: () => exports.FireworksLaunchSchemeData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FireworksLaunchSchemeData scheme_data */ 13:
                    message.schemeData = exports.FireworksLaunchSchemeData.internalBinaryRead(reader, reader.uint32(), options, message.schemeData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FireworksLaunchSchemeData scheme_data = 13; */
        if (message.schemeData)
            exports.FireworksLaunchSchemeData.internalBinaryWrite(message.schemeData, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LaunchFireworksReq
 */
exports.LaunchFireworksReq = new LaunchFireworksReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LaunchFireworksRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LaunchFireworksRsp", [
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.LaunchFireworksRsp
 */
exports.LaunchFireworksRsp = new LaunchFireworksRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FireworksLaunchDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FireworksLaunchDataNotify", [
            { no: 12, name: "scheme_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FireworksLaunchSchemeData },
            { no: 4, name: "last_use_scheme_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { schemeDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FireworksLaunchSchemeData scheme_data_list */ 12:
                    message.schemeDataList.push(exports.FireworksLaunchSchemeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 last_use_scheme_id */ 4:
                    message.lastUseSchemeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.FireworksLaunchSchemeData scheme_data_list = 12; */
        for (let i = 0; i < message.schemeDataList.length; i++)
            exports.FireworksLaunchSchemeData.internalBinaryWrite(message.schemeDataList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 last_use_scheme_id = 4; */
        if (message.lastUseSchemeId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.lastUseSchemeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FireworksLaunchDataNotify
 */
exports.FireworksLaunchDataNotify = new FireworksLaunchDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeWidgetBackgroundActiveStateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeWidgetBackgroundActiveStateReq", [
            { no: 15, name: "is_active", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_active */ 15:
                    message.isActive = reader.bool();
                    break;
                case /* optional uint32 material_id */ 3:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_active = 15; */
        if (message.isActive !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isActive);
        /* optional uint32 material_id = 3; */
        if (message.materialId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeWidgetBackgroundActiveStateReq
 */
exports.ChangeWidgetBackgroundActiveStateReq = new ChangeWidgetBackgroundActiveStateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeWidgetBackgroundActiveStateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeWidgetBackgroundActiveStateRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 material_id */ 6:
                    message.materialId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 material_id = 6; */
        if (message.materialId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeWidgetBackgroundActiveStateRsp
 */
exports.ChangeWidgetBackgroundActiveStateRsp = new ChangeWidgetBackgroundActiveStateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllWidgetBackgroundActiveStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllWidgetBackgroundActiveStateNotify", [
            { no: 3, name: "background_active_widget_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { backgroundActiveWidgetList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 background_active_widget_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backgroundActiveWidgetList.push(reader.uint32());
                    else
                        message.backgroundActiveWidgetList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 background_active_widget_list = 3; */
        if (message.backgroundActiveWidgetList.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backgroundActiveWidgetList.length; i++)
                writer.uint32(message.backgroundActiveWidgetList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllWidgetBackgroundActiveStateNotify
 */
exports.AllWidgetBackgroundActiveStateNotify = new AllWidgetBackgroundActiveStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWidgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerWidgetInfo", [
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WidgetSlotData }
        ]);
    }
    create(value) {
        const message = { slotList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* repeated com.midnights.game.WidgetSlotData slot_list */ 13:
                    message.slotList.push(exports.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated com.midnights.game.WidgetSlotData slot_list = 13; */
        for (let i = 0; i < message.slotList.length; i++)
            exports.WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerWidgetInfo
 */
exports.PlayerWidgetInfo = new PlayerWidgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemotePlayerWidgetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemotePlayerWidgetNotify", [
            { no: 3, name: "player_widget_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerWidgetInfo }
        ]);
    }
    create(value) {
        const message = { playerWidgetInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PlayerWidgetInfo player_widget_info_list */ 3:
                    message.playerWidgetInfoList.push(exports.PlayerWidgetInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.PlayerWidgetInfo player_widget_info_list = 3; */
        for (let i = 0; i < message.playerWidgetInfoList.length; i++)
            exports.PlayerWidgetInfo.internalBinaryWrite(message.playerWidgetInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemotePlayerWidgetNotify
 */
exports.RemotePlayerWidgetNotify = new RemotePlayerWidgetNotify$Type();
