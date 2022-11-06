"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonObstaclesModifyNotify = exports.ToTheMoonRemoveObstacleRsp = exports.ToTheMoonRemoveObstacleReq = exports.ToTheMoonAddObstacleRsp = exports.DynamicNodes = exports.DynamicLayerNodes = exports.DynamicSVONode = exports.ToTheMoonAddObstacleReq = exports.ToTheMoonObstacleInfo = exports.ToTheMoonEnterSceneRsp = exports.ToTheMoonEnterSceneReq = exports.ToTheMoonPingNotify = exports.ToTheMoonQueryPathRsp = exports.ToTheMoonQueryPathReq = exports.ToTheMoonObstaclesModifyNotify_CmdId = exports.ToTheMoonRemoveObstacleRsp_CmdId = exports.ToTheMoonRemoveObstacleReq_ObstacleType = exports.ToTheMoonRemoveObstacleReq_CmdId = exports.ToTheMoonAddObstacleRsp_CmdId = exports.ToTheMoonAddObstacleReq_CmdId = exports.ToTheMoonObstacleInfo_ShapeType = exports.ToTheMoonEnterSceneRsp_CmdId = exports.ToTheMoonEnterSceneReq_CmdId = exports.ToTheMoonPingNotify_CmdId = exports.ToTheMoonQueryPathRsp_CmdId = exports.ToTheMoonQueryPathRsp_PathStatusType = exports.ToTheMoonQueryPathReq_CmdId = exports.ToTheMoonQueryPathReq_FilterType = exports.ToTheMoonQueryPathReq_AStarMethod = exports.ToTheMoonQueryPathReq_OptionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathReq.OptionType
 */
var ToTheMoonQueryPathReq_OptionType;
(function (ToTheMoonQueryPathReq_OptionType) {
    /**
     * @generated from protobuf enum value: OPTION_NONE = 0;
     */
    ToTheMoonQueryPathReq_OptionType[ToTheMoonQueryPathReq_OptionType["OPTION_NONE"] = 0] = "OPTION_NONE";
    /**
     * @generated from protobuf enum value: OPTION_NORMAL = 1;
     */
    ToTheMoonQueryPathReq_OptionType[ToTheMoonQueryPathReq_OptionType["OPTION_NORMAL"] = 1] = "OPTION_NORMAL";
})(ToTheMoonQueryPathReq_OptionType = exports.ToTheMoonQueryPathReq_OptionType || (exports.ToTheMoonQueryPathReq_OptionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathReq.AStarMethod
 */
var ToTheMoonQueryPathReq_AStarMethod;
(function (ToTheMoonQueryPathReq_AStarMethod) {
    /**
     * @generated from protobuf enum value: Classic = 0;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["Classic"] = 0] = "Classic";
    /**
     * @generated from protobuf enum value: Tendency = 1;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["Tendency"] = 1] = "Tendency";
    /**
     * @generated from protobuf enum value: Adaptive = 2;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["Adaptive"] = 2] = "Adaptive";
    /**
     * @generated from protobuf enum value: Inflection = 3;
     */
    ToTheMoonQueryPathReq_AStarMethod[ToTheMoonQueryPathReq_AStarMethod["Inflection"] = 3] = "Inflection";
})(ToTheMoonQueryPathReq_AStarMethod = exports.ToTheMoonQueryPathReq_AStarMethod || (exports.ToTheMoonQueryPathReq_AStarMethod = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathReq.FilterType
 */
var ToTheMoonQueryPathReq_FilterType;
(function (ToTheMoonQueryPathReq_FilterType) {
    /**
     * @generated from protobuf enum value: All = 0;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["All"] = 0] = "All";
    /**
     * @generated from protobuf enum value: Air = 1;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["Air"] = 1] = "Air";
    /**
     * @generated from protobuf enum value: Water = 2;
     */
    ToTheMoonQueryPathReq_FilterType[ToTheMoonQueryPathReq_FilterType["Water"] = 2] = "Water";
})(ToTheMoonQueryPathReq_FilterType = exports.ToTheMoonQueryPathReq_FilterType || (exports.ToTheMoonQueryPathReq_FilterType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathReq.CmdId
 */
var ToTheMoonQueryPathReq_CmdId;
(function (ToTheMoonQueryPathReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonQueryPathReq_CmdId[ToTheMoonQueryPathReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6172;
     */
    ToTheMoonQueryPathReq_CmdId[ToTheMoonQueryPathReq_CmdId["CMD_ID"] = 6172] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonQueryPathReq_CmdId[ToTheMoonQueryPathReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonQueryPathReq_CmdId[ToTheMoonQueryPathReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonQueryPathReq_CmdId[ToTheMoonQueryPathReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonQueryPathReq_CmdId = exports.ToTheMoonQueryPathReq_CmdId || (exports.ToTheMoonQueryPathReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathRsp.PathStatusType
 */
var ToTheMoonQueryPathRsp_PathStatusType;
(function (ToTheMoonQueryPathRsp_PathStatusType) {
    /**
     * @generated from protobuf enum value: STATUS_FAIL = 0;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["STATUS_FAIL"] = 0] = "STATUS_FAIL";
    /**
     * @generated from protobuf enum value: STATUS_SUCC = 1;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["STATUS_SUCC"] = 1] = "STATUS_SUCC";
    /**
     * @generated from protobuf enum value: STATUS_PARTIAL = 2;
     */
    ToTheMoonQueryPathRsp_PathStatusType[ToTheMoonQueryPathRsp_PathStatusType["STATUS_PARTIAL"] = 2] = "STATUS_PARTIAL";
})(ToTheMoonQueryPathRsp_PathStatusType = exports.ToTheMoonQueryPathRsp_PathStatusType || (exports.ToTheMoonQueryPathRsp_PathStatusType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonQueryPathRsp.CmdId
 */
var ToTheMoonQueryPathRsp_CmdId;
(function (ToTheMoonQueryPathRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonQueryPathRsp_CmdId[ToTheMoonQueryPathRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6198;
     */
    ToTheMoonQueryPathRsp_CmdId[ToTheMoonQueryPathRsp_CmdId["CMD_ID"] = 6198] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonQueryPathRsp_CmdId[ToTheMoonQueryPathRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonQueryPathRsp_CmdId[ToTheMoonQueryPathRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ToTheMoonQueryPathRsp_CmdId = exports.ToTheMoonQueryPathRsp_CmdId || (exports.ToTheMoonQueryPathRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonPingNotify.CmdId
 */
var ToTheMoonPingNotify_CmdId;
(function (ToTheMoonPingNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonPingNotify_CmdId[ToTheMoonPingNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6112;
     */
    ToTheMoonPingNotify_CmdId[ToTheMoonPingNotify_CmdId["CMD_ID"] = 6112] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonPingNotify_CmdId[ToTheMoonPingNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonPingNotify_CmdId[ToTheMoonPingNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonPingNotify_CmdId[ToTheMoonPingNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonPingNotify_CmdId = exports.ToTheMoonPingNotify_CmdId || (exports.ToTheMoonPingNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonEnterSceneReq.CmdId
 */
var ToTheMoonEnterSceneReq_CmdId;
(function (ToTheMoonEnterSceneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonEnterSceneReq_CmdId[ToTheMoonEnterSceneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6135;
     */
    ToTheMoonEnterSceneReq_CmdId[ToTheMoonEnterSceneReq_CmdId["CMD_ID"] = 6135] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonEnterSceneReq_CmdId[ToTheMoonEnterSceneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonEnterSceneReq_CmdId[ToTheMoonEnterSceneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonEnterSceneReq_CmdId[ToTheMoonEnterSceneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonEnterSceneReq_CmdId = exports.ToTheMoonEnterSceneReq_CmdId || (exports.ToTheMoonEnterSceneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonEnterSceneRsp.CmdId
 */
var ToTheMoonEnterSceneRsp_CmdId;
(function (ToTheMoonEnterSceneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonEnterSceneRsp_CmdId[ToTheMoonEnterSceneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6107;
     */
    ToTheMoonEnterSceneRsp_CmdId[ToTheMoonEnterSceneRsp_CmdId["CMD_ID"] = 6107] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonEnterSceneRsp_CmdId[ToTheMoonEnterSceneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonEnterSceneRsp_CmdId[ToTheMoonEnterSceneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ToTheMoonEnterSceneRsp_CmdId = exports.ToTheMoonEnterSceneRsp_CmdId || (exports.ToTheMoonEnterSceneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonObstacleInfo.ShapeType
 */
var ToTheMoonObstacleInfo_ShapeType;
(function (ToTheMoonObstacleInfo_ShapeType) {
    /**
     * @generated from protobuf enum value: OBSTACLE_SHAPE_CAPSULE = 0;
     */
    ToTheMoonObstacleInfo_ShapeType[ToTheMoonObstacleInfo_ShapeType["OBSTACLE_SHAPE_CAPSULE"] = 0] = "OBSTACLE_SHAPE_CAPSULE";
    /**
     * @generated from protobuf enum value: OBSTACLE_SHAPE_BOX = 1;
     */
    ToTheMoonObstacleInfo_ShapeType[ToTheMoonObstacleInfo_ShapeType["OBSTACLE_SHAPE_BOX"] = 1] = "OBSTACLE_SHAPE_BOX";
})(ToTheMoonObstacleInfo_ShapeType = exports.ToTheMoonObstacleInfo_ShapeType || (exports.ToTheMoonObstacleInfo_ShapeType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonAddObstacleReq.CmdId
 */
var ToTheMoonAddObstacleReq_CmdId;
(function (ToTheMoonAddObstacleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonAddObstacleReq_CmdId[ToTheMoonAddObstacleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6121;
     */
    ToTheMoonAddObstacleReq_CmdId[ToTheMoonAddObstacleReq_CmdId["CMD_ID"] = 6121] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonAddObstacleReq_CmdId[ToTheMoonAddObstacleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonAddObstacleReq_CmdId[ToTheMoonAddObstacleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonAddObstacleReq_CmdId[ToTheMoonAddObstacleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonAddObstacleReq_CmdId = exports.ToTheMoonAddObstacleReq_CmdId || (exports.ToTheMoonAddObstacleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonAddObstacleRsp.CmdId
 */
var ToTheMoonAddObstacleRsp_CmdId;
(function (ToTheMoonAddObstacleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonAddObstacleRsp_CmdId[ToTheMoonAddObstacleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6103;
     */
    ToTheMoonAddObstacleRsp_CmdId[ToTheMoonAddObstacleRsp_CmdId["CMD_ID"] = 6103] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonAddObstacleRsp_CmdId[ToTheMoonAddObstacleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonAddObstacleRsp_CmdId[ToTheMoonAddObstacleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ToTheMoonAddObstacleRsp_CmdId = exports.ToTheMoonAddObstacleRsp_CmdId || (exports.ToTheMoonAddObstacleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonRemoveObstacleReq.CmdId
 */
var ToTheMoonRemoveObstacleReq_CmdId;
(function (ToTheMoonRemoveObstacleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonRemoveObstacleReq_CmdId[ToTheMoonRemoveObstacleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6190;
     */
    ToTheMoonRemoveObstacleReq_CmdId[ToTheMoonRemoveObstacleReq_CmdId["CMD_ID"] = 6190] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonRemoveObstacleReq_CmdId[ToTheMoonRemoveObstacleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonRemoveObstacleReq_CmdId[ToTheMoonRemoveObstacleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonRemoveObstacleReq_CmdId[ToTheMoonRemoveObstacleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonRemoveObstacleReq_CmdId = exports.ToTheMoonRemoveObstacleReq_CmdId || (exports.ToTheMoonRemoveObstacleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonRemoveObstacleReq.ObstacleType
 */
var ToTheMoonRemoveObstacleReq_ObstacleType;
(function (ToTheMoonRemoveObstacleReq_ObstacleType) {
    /**
     * @generated from protobuf enum value: Box = 0;
     */
    ToTheMoonRemoveObstacleReq_ObstacleType[ToTheMoonRemoveObstacleReq_ObstacleType["Box"] = 0] = "Box";
    /**
     * @generated from protobuf enum value: Capsule = 1;
     */
    ToTheMoonRemoveObstacleReq_ObstacleType[ToTheMoonRemoveObstacleReq_ObstacleType["Capsule"] = 1] = "Capsule";
})(ToTheMoonRemoveObstacleReq_ObstacleType = exports.ToTheMoonRemoveObstacleReq_ObstacleType || (exports.ToTheMoonRemoveObstacleReq_ObstacleType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonRemoveObstacleRsp.CmdId
 */
var ToTheMoonRemoveObstacleRsp_CmdId;
(function (ToTheMoonRemoveObstacleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonRemoveObstacleRsp_CmdId[ToTheMoonRemoveObstacleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6173;
     */
    ToTheMoonRemoveObstacleRsp_CmdId[ToTheMoonRemoveObstacleRsp_CmdId["CMD_ID"] = 6173] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonRemoveObstacleRsp_CmdId[ToTheMoonRemoveObstacleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonRemoveObstacleRsp_CmdId[ToTheMoonRemoveObstacleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ToTheMoonRemoveObstacleRsp_CmdId = exports.ToTheMoonRemoveObstacleRsp_CmdId || (exports.ToTheMoonRemoveObstacleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ToTheMoonObstaclesModifyNotify.CmdId
 */
var ToTheMoonObstaclesModifyNotify_CmdId;
(function (ToTheMoonObstaclesModifyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonObstaclesModifyNotify_CmdId[ToTheMoonObstaclesModifyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6199;
     */
    ToTheMoonObstaclesModifyNotify_CmdId[ToTheMoonObstaclesModifyNotify_CmdId["CMD_ID"] = 6199] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ToTheMoonObstaclesModifyNotify_CmdId[ToTheMoonObstaclesModifyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonObstaclesModifyNotify_CmdId[ToTheMoonObstaclesModifyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ToTheMoonObstaclesModifyNotify_CmdId[ToTheMoonObstaclesModifyNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ToTheMoonObstaclesModifyNotify_CmdId = exports.ToTheMoonObstaclesModifyNotify_CmdId || (exports.ToTheMoonObstaclesModifyNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonQueryPathReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonQueryPathReq", [
            { no: 9, name: "destination_pos", kind: "message", T: () => define_2.Vector },
            { no: 15, name: "fuzzy_range", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "query_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ToTheMoonQueryPathReq.OptionType", ToTheMoonQueryPathReq_OptionType] },
            { no: 1, name: "astar_method", kind: "enum", opt: true, T: () => ["com.midnights.game.ToTheMoonQueryPathReq.AStarMethod", ToTheMoonQueryPathReq_AStarMethod] },
            { no: 6, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "filter_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ToTheMoonQueryPathReq.FilterType", ToTheMoonQueryPathReq_FilterType] },
            { no: 13, name: "refined", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "use_full_neighbor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "source_pos", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector destination_pos */ 9:
                    message.destinationPos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.destinationPos);
                    break;
                case /* optional int32 fuzzy_range */ 15:
                    message.fuzzyRange = reader.int32();
                    break;
                case /* optional com.midnights.game.ToTheMoonQueryPathReq.OptionType query_type */ 8:
                    message.queryType = reader.int32();
                    break;
                case /* optional com.midnights.game.ToTheMoonQueryPathReq.AStarMethod astar_method */ 1:
                    message.astarMethod = reader.int32();
                    break;
                case /* optional uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional int32 query_id */ 11:
                    message.queryId = reader.int32();
                    break;
                case /* optional com.midnights.game.ToTheMoonQueryPathReq.FilterType filter_type */ 3:
                    message.filterType = reader.int32();
                    break;
                case /* optional bool refined */ 13:
                    message.refined = reader.bool();
                    break;
                case /* optional bool use_full_neighbor */ 5:
                    message.useFullNeighbor = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector source_pos */ 10:
                    message.sourcePos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.sourcePos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector destination_pos = 9; */
        if (message.destinationPos)
            define_2.Vector.internalBinaryWrite(message.destinationPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 fuzzy_range = 15; */
        if (message.fuzzyRange !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.fuzzyRange);
        /* optional com.midnights.game.ToTheMoonQueryPathReq.OptionType query_type = 8; */
        if (message.queryType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.queryType);
        /* optional com.midnights.game.ToTheMoonQueryPathReq.AStarMethod astar_method = 1; */
        if (message.astarMethod !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.astarMethod);
        /* optional uint32 scene_id = 6; */
        if (message.sceneId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional int32 query_id = 11; */
        if (message.queryId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.queryId);
        /* optional com.midnights.game.ToTheMoonQueryPathReq.FilterType filter_type = 3; */
        if (message.filterType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.filterType);
        /* optional bool refined = 13; */
        if (message.refined !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.refined);
        /* optional bool use_full_neighbor = 5; */
        if (message.useFullNeighbor !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.useFullNeighbor);
        /* optional com.midnights.game.Vector source_pos = 10; */
        if (message.sourcePos)
            define_2.Vector.internalBinaryWrite(message.sourcePos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonQueryPathReq
 */
exports.ToTheMoonQueryPathReq = new ToTheMoonQueryPathReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonQueryPathRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonQueryPathRsp", [
            { no: 7, name: "query_status", kind: "enum", opt: true, T: () => ["com.midnights.game.ToTheMoonQueryPathRsp.PathStatusType", ToTheMoonQueryPathRsp_PathStatusType] },
            { no: 3, name: "index", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "corners", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Vector },
            { no: 1, name: "level", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { index: [], corners: [], level: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ToTheMoonQueryPathRsp.PathStatusType query_status */ 7:
                    message.queryStatus = reader.int32();
                    break;
                case /* repeated int64 index */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.index.push(reader.int64().toBigInt());
                    else
                        message.index.push(reader.int64().toBigInt());
                    break;
                case /* repeated com.midnights.game.Vector corners */ 14:
                    message.corners.push(define_2.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated int32 level */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.level.push(reader.int32());
                    else
                        message.level.push(reader.int32());
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional int32 query_id */ 9:
                    message.queryId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ToTheMoonQueryPathRsp.PathStatusType query_status = 7; */
        if (message.queryStatus !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.queryStatus);
        /* repeated int64 index = 3; */
        if (message.index.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.index.length; i++)
                writer.int64(message.index[i]);
            writer.join();
        }
        /* repeated com.midnights.game.Vector corners = 14; */
        for (let i = 0; i < message.corners.length; i++)
            define_2.Vector.internalBinaryWrite(message.corners[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated int32 level = 1; */
        if (message.level.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.level.length; i++)
                writer.int32(message.level[i]);
            writer.join();
        }
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional int32 query_id = 9; */
        if (message.queryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.queryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonQueryPathRsp
 */
exports.ToTheMoonQueryPathRsp = new ToTheMoonQueryPathRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonPingNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonPingNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonPingNotify
 */
exports.ToTheMoonPingNotify = new ToTheMoonPingNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonEnterSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonEnterSceneReq", [
            { no: 14, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 version */ 14:
                    message.version = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 15:
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
        /* optional uint32 version = 14; */
        if (message.version !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.version);
        /* optional uint32 scene_id = 15; */
        if (message.sceneId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonEnterSceneReq
 */
exports.ToTheMoonEnterSceneReq = new ToTheMoonEnterSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonEnterSceneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonEnterSceneRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonEnterSceneRsp
 */
exports.ToTheMoonEnterSceneRsp = new ToTheMoonEnterSceneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonObstacleInfo", [
            { no: 2, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.ToTheMoonObstacleInfo.ShapeType", ToTheMoonObstacleInfo_ShapeType] },
            { no: 11, name: "handle_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "rotation", kind: "message", T: () => define_1.MathQuaternion },
            { no: 13, name: "center", kind: "message", T: () => define_2.Vector },
            { no: 14, name: "half_extents", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ToTheMoonObstacleInfo.ShapeType type */ 2:
                    message.type = reader.int32();
                    break;
                case /* optional int32 handle_id */ 11:
                    message.handleId = reader.int32();
                    break;
                case /* optional com.midnights.game.MathQuaternion rotation */ 7:
                    message.rotation = define_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* optional com.midnights.game.Vector center */ 13:
                    message.center = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector half_extents */ 14:
                    message.halfExtents = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.halfExtents);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ToTheMoonObstacleInfo.ShapeType type = 2; */
        if (message.type !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.type);
        /* optional int32 handle_id = 11; */
        if (message.handleId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.handleId);
        /* optional com.midnights.game.MathQuaternion rotation = 7; */
        if (message.rotation)
            define_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector center = 13; */
        if (message.center)
            define_2.Vector.internalBinaryWrite(message.center, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector half_extents = 14; */
        if (message.halfExtents)
            define_2.Vector.internalBinaryWrite(message.halfExtents, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonObstacleInfo
 */
exports.ToTheMoonObstacleInfo = new ToTheMoonObstacleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonAddObstacleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonAddObstacleReq", [
            { no: 12, name: "use_edge", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "obstacle", kind: "message", T: () => exports.ToTheMoonObstacleInfo },
            { no: 9, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool use_edge */ 12:
                    message.useEdge = reader.bool();
                    break;
                case /* optional com.midnights.game.ToTheMoonObstacleInfo obstacle */ 13:
                    message.obstacle = exports.ToTheMoonObstacleInfo.internalBinaryRead(reader, reader.uint32(), options, message.obstacle);
                    break;
                case /* optional int32 query_id */ 9:
                    message.queryId = reader.int32();
                    break;
                case /* optional uint32 scene_id */ 3:
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
        /* optional bool use_edge = 12; */
        if (message.useEdge !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.useEdge);
        /* optional com.midnights.game.ToTheMoonObstacleInfo obstacle = 13; */
        if (message.obstacle)
            exports.ToTheMoonObstacleInfo.internalBinaryWrite(message.obstacle, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 query_id = 9; */
        if (message.queryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.queryId);
        /* optional uint32 scene_id = 3; */
        if (message.sceneId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonAddObstacleReq
 */
exports.ToTheMoonAddObstacleReq = new ToTheMoonAddObstacleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynamicSVONode$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DynamicSVONode", [
            { no: 8, name: "index", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "area", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "refer_pos", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 index */ 8:
                    message.index = reader.int64().toBigInt();
                    break;
                case /* optional int32 area */ 5:
                    message.area = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector refer_pos */ 1:
                    message.referPos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.referPos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int64 index = 8; */
        if (message.index !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int64(message.index);
        /* optional int32 area = 5; */
        if (message.area !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.area);
        /* optional com.midnights.game.Vector refer_pos = 1; */
        if (message.referPos)
            define_2.Vector.internalBinaryWrite(message.referPos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DynamicSVONode
 */
exports.DynamicSVONode = new DynamicSVONode$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynamicLayerNodes$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DynamicLayerNodes", [
            { no: 10, name: "level", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "nodes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.DynamicSVONode }
        ]);
    }
    create(value) {
        const message = { nodes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 level */ 10:
                    message.level = reader.int32();
                    break;
                case /* repeated com.midnights.game.DynamicSVONode nodes */ 6:
                    message.nodes.push(exports.DynamicSVONode.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 level = 10; */
        if (message.level !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.level);
        /* repeated com.midnights.game.DynamicSVONode nodes = 6; */
        for (let i = 0; i < message.nodes.length; i++)
            exports.DynamicSVONode.internalBinaryWrite(message.nodes[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DynamicLayerNodes
 */
exports.DynamicLayerNodes = new DynamicLayerNodes$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynamicNodes$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DynamicNodes", [
            { no: 3, name: "nodes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.DynamicLayerNodes }
        ]);
    }
    create(value) {
        const message = { nodes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.DynamicLayerNodes nodes */ 3:
                    message.nodes.push(exports.DynamicLayerNodes.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.DynamicLayerNodes nodes = 3; */
        for (let i = 0; i < message.nodes.length; i++)
            exports.DynamicLayerNodes.internalBinaryWrite(message.nodes[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DynamicNodes
 */
exports.DynamicNodes = new DynamicNodes$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonAddObstacleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonAddObstacleRsp", [
            { no: 2, name: "dynamic_nodes", kind: "message", T: () => exports.DynamicNodes },
            { no: 13, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
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
                case /* optional com.midnights.game.DynamicNodes dynamic_nodes */ 2:
                    message.dynamicNodes = exports.DynamicNodes.internalBinaryRead(reader, reader.uint32(), options, message.dynamicNodes);
                    break;
                case /* optional int32 query_id */ 13:
                    message.queryId = reader.int32();
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
        /* optional com.midnights.game.DynamicNodes dynamic_nodes = 2; */
        if (message.dynamicNodes)
            exports.DynamicNodes.internalBinaryWrite(message.dynamicNodes, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 query_id = 13; */
        if (message.queryId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.queryId);
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
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonAddObstacleRsp
 */
exports.ToTheMoonAddObstacleRsp = new ToTheMoonAddObstacleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonRemoveObstacleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonRemoveObstacleReq", [
            { no: 12, name: "handle", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 handle */ 12:
                    message.handle = reader.int32();
                    break;
                case /* optional uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional int32 query_id */ 11:
                    message.queryId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 handle = 12; */
        if (message.handle !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.handle);
        /* optional uint32 scene_id = 10; */
        if (message.sceneId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional int32 query_id = 11; */
        if (message.queryId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.queryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonRemoveObstacleReq
 */
exports.ToTheMoonRemoveObstacleReq = new ToTheMoonRemoveObstacleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonRemoveObstacleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonRemoveObstacleRsp", [
            { no: 3, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "dynamic_nodes", kind: "message", T: () => exports.DynamicNodes }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 query_id */ 3:
                    message.queryId = reader.int32();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.DynamicNodes dynamic_nodes */ 8:
                    message.dynamicNodes = exports.DynamicNodes.internalBinaryRead(reader, reader.uint32(), options, message.dynamicNodes);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 query_id = 3; */
        if (message.queryId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.queryId);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.DynamicNodes dynamic_nodes = 8; */
        if (message.dynamicNodes)
            exports.DynamicNodes.internalBinaryWrite(message.dynamicNodes, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonRemoveObstacleRsp
 */
exports.ToTheMoonRemoveObstacleRsp = new ToTheMoonRemoveObstacleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonObstaclesModifyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ToTheMoonObstaclesModifyNotify", [
            { no: 4, name: "add_obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ToTheMoonObstacleInfo },
            { no: 13, name: "remove_obstacle_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "use_edge", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { addObstacles: [], removeObstacleIds: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ToTheMoonObstacleInfo add_obstacles */ 4:
                    message.addObstacles.push(exports.ToTheMoonObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated int32 remove_obstacle_ids */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removeObstacleIds.push(reader.int32());
                    else
                        message.removeObstacleIds.push(reader.int32());
                    break;
                case /* optional uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional bool use_edge */ 1:
                    message.useEdge = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ToTheMoonObstacleInfo add_obstacles = 4; */
        for (let i = 0; i < message.addObstacles.length; i++)
            exports.ToTheMoonObstacleInfo.internalBinaryWrite(message.addObstacles[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated int32 remove_obstacle_ids = 13; */
        if (message.removeObstacleIds.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removeObstacleIds.length; i++)
                writer.int32(message.removeObstacleIds[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 15; */
        if (message.sceneId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional bool use_edge = 1; */
        if (message.useEdge !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.useEdge);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ToTheMoonObstaclesModifyNotify
 */
exports.ToTheMoonObstaclesModifyNotify = new ToTheMoonObstaclesModifyNotify$Type();
