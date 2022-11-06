"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMeshStatsNotify = exports.PbNavMeshStatsInfo = exports.GMShowNavMeshRsp = exports.PBNavMeshTile = exports.PBNavMeshPoly = exports.GMShowNavMeshReq = exports.GMShowObstacleRsp = exports.GMObstacleInfo = exports.GMShowObstacleReq = exports.PathfindingEnterSceneRsp = exports.PathfindingEnterSceneReq = exports.PathfindingPingNotify = exports.ObstacleModifyNotify = exports.ObstacleInfo = exports.QueryPathRsp = exports.QueryPathReq = exports.QueryFilter = exports.NavMeshStatsNotify_CmdId = exports.GMShowNavMeshRsp_CmdId = exports.PBNavMeshPoly_EdgeType = exports.GMShowNavMeshReq_CmdId = exports.GMShowObstacleRsp_CmdId = exports.GMShowObstacleReq_CmdId = exports.PathfindingEnterSceneRsp_CmdId = exports.PathfindingEnterSceneReq_CmdId = exports.PathfindingPingNotify_CmdId = exports.ObstacleModifyNotify_CmdId = exports.ObstacleInfo_ShapeType = exports.QueryPathRsp_CmdId = exports.QueryPathRsp_PathStatusType = exports.QueryPathReq_CmdId = exports.QueryPathReq_OptionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.QueryPathReq.OptionType
 */
var QueryPathReq_OptionType;
(function (QueryPathReq_OptionType) {
    /**
     * @generated from protobuf enum value: OPTION_NONE = 0;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["OPTION_NONE"] = 0] = "OPTION_NONE";
    /**
     * @generated from protobuf enum value: OPTION_NORMAL = 1;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["OPTION_NORMAL"] = 1] = "OPTION_NORMAL";
    /**
     * @generated from protobuf enum value: OPTION_FIRST_CAN_GO = 2;
     */
    QueryPathReq_OptionType[QueryPathReq_OptionType["OPTION_FIRST_CAN_GO"] = 2] = "OPTION_FIRST_CAN_GO";
})(QueryPathReq_OptionType = exports.QueryPathReq_OptionType || (exports.QueryPathReq_OptionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.QueryPathReq.CmdId
 */
var QueryPathReq_CmdId;
(function (QueryPathReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryPathReq_CmdId[QueryPathReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2372;
     */
    QueryPathReq_CmdId[QueryPathReq_CmdId["CMD_ID"] = 2372] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryPathReq_CmdId[QueryPathReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryPathReq_CmdId[QueryPathReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryPathReq_CmdId[QueryPathReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QueryPathReq_CmdId = exports.QueryPathReq_CmdId || (exports.QueryPathReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QueryPathRsp.PathStatusType
 */
var QueryPathRsp_PathStatusType;
(function (QueryPathRsp_PathStatusType) {
    /**
     * @generated from protobuf enum value: STATUS_FAIL = 0;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["STATUS_FAIL"] = 0] = "STATUS_FAIL";
    /**
     * @generated from protobuf enum value: STATUS_SUCC = 1;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["STATUS_SUCC"] = 1] = "STATUS_SUCC";
    /**
     * @generated from protobuf enum value: STATUS_PARTIAL = 2;
     */
    QueryPathRsp_PathStatusType[QueryPathRsp_PathStatusType["STATUS_PARTIAL"] = 2] = "STATUS_PARTIAL";
})(QueryPathRsp_PathStatusType = exports.QueryPathRsp_PathStatusType || (exports.QueryPathRsp_PathStatusType = {}));
/**
 * @generated from protobuf enum com.midnights.game.QueryPathRsp.CmdId
 */
var QueryPathRsp_CmdId;
(function (QueryPathRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryPathRsp_CmdId[QueryPathRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2398;
     */
    QueryPathRsp_CmdId[QueryPathRsp_CmdId["CMD_ID"] = 2398] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryPathRsp_CmdId[QueryPathRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryPathRsp_CmdId[QueryPathRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QueryPathRsp_CmdId = exports.QueryPathRsp_CmdId || (exports.QueryPathRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ObstacleInfo.ShapeType
 */
var ObstacleInfo_ShapeType;
(function (ObstacleInfo_ShapeType) {
    /**
     * @generated from protobuf enum value: OBSTACLE_SHAPE_CAPSULE = 0;
     */
    ObstacleInfo_ShapeType[ObstacleInfo_ShapeType["OBSTACLE_SHAPE_CAPSULE"] = 0] = "OBSTACLE_SHAPE_CAPSULE";
    /**
     * @generated from protobuf enum value: OBSTACLE_SHAPE_BOX = 1;
     */
    ObstacleInfo_ShapeType[ObstacleInfo_ShapeType["OBSTACLE_SHAPE_BOX"] = 1] = "OBSTACLE_SHAPE_BOX";
})(ObstacleInfo_ShapeType = exports.ObstacleInfo_ShapeType || (exports.ObstacleInfo_ShapeType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ObstacleModifyNotify.CmdId
 */
var ObstacleModifyNotify_CmdId;
(function (ObstacleModifyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ObstacleModifyNotify_CmdId[ObstacleModifyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2312;
     */
    ObstacleModifyNotify_CmdId[ObstacleModifyNotify_CmdId["CMD_ID"] = 2312] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ObstacleModifyNotify_CmdId[ObstacleModifyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ObstacleModifyNotify_CmdId[ObstacleModifyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ObstacleModifyNotify_CmdId[ObstacleModifyNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ObstacleModifyNotify_CmdId = exports.ObstacleModifyNotify_CmdId || (exports.ObstacleModifyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PathfindingPingNotify.CmdId
 */
var PathfindingPingNotify_CmdId;
(function (PathfindingPingNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingPingNotify_CmdId[PathfindingPingNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2335;
     */
    PathfindingPingNotify_CmdId[PathfindingPingNotify_CmdId["CMD_ID"] = 2335] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingPingNotify_CmdId[PathfindingPingNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PathfindingPingNotify_CmdId[PathfindingPingNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PathfindingPingNotify_CmdId[PathfindingPingNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PathfindingPingNotify_CmdId = exports.PathfindingPingNotify_CmdId || (exports.PathfindingPingNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PathfindingEnterSceneReq.CmdId
 */
var PathfindingEnterSceneReq_CmdId;
(function (PathfindingEnterSceneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingEnterSceneReq_CmdId[PathfindingEnterSceneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2307;
     */
    PathfindingEnterSceneReq_CmdId[PathfindingEnterSceneReq_CmdId["CMD_ID"] = 2307] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingEnterSceneReq_CmdId[PathfindingEnterSceneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PathfindingEnterSceneReq_CmdId[PathfindingEnterSceneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PathfindingEnterSceneReq_CmdId[PathfindingEnterSceneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PathfindingEnterSceneReq_CmdId = exports.PathfindingEnterSceneReq_CmdId || (exports.PathfindingEnterSceneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PathfindingEnterSceneRsp.CmdId
 */
var PathfindingEnterSceneRsp_CmdId;
(function (PathfindingEnterSceneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingEnterSceneRsp_CmdId[PathfindingEnterSceneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2321;
     */
    PathfindingEnterSceneRsp_CmdId[PathfindingEnterSceneRsp_CmdId["CMD_ID"] = 2321] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PathfindingEnterSceneRsp_CmdId[PathfindingEnterSceneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PathfindingEnterSceneRsp_CmdId[PathfindingEnterSceneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PathfindingEnterSceneRsp_CmdId = exports.PathfindingEnterSceneRsp_CmdId || (exports.PathfindingEnterSceneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GMShowObstacleReq.CmdId
 */
var GMShowObstacleReq_CmdId;
(function (GMShowObstacleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowObstacleReq_CmdId[GMShowObstacleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2361;
     */
    GMShowObstacleReq_CmdId[GMShowObstacleReq_CmdId["CMD_ID"] = 2361] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowObstacleReq_CmdId[GMShowObstacleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowObstacleReq_CmdId[GMShowObstacleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowObstacleReq_CmdId[GMShowObstacleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GMShowObstacleReq_CmdId = exports.GMShowObstacleReq_CmdId || (exports.GMShowObstacleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GMShowObstacleRsp.CmdId
 */
var GMShowObstacleRsp_CmdId;
(function (GMShowObstacleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowObstacleRsp_CmdId[GMShowObstacleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2329;
     */
    GMShowObstacleRsp_CmdId[GMShowObstacleRsp_CmdId["CMD_ID"] = 2329] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowObstacleRsp_CmdId[GMShowObstacleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowObstacleRsp_CmdId[GMShowObstacleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GMShowObstacleRsp_CmdId = exports.GMShowObstacleRsp_CmdId || (exports.GMShowObstacleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GMShowNavMeshReq.CmdId
 */
var GMShowNavMeshReq_CmdId;
(function (GMShowNavMeshReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowNavMeshReq_CmdId[GMShowNavMeshReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2357;
     */
    GMShowNavMeshReq_CmdId[GMShowNavMeshReq_CmdId["CMD_ID"] = 2357] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowNavMeshReq_CmdId[GMShowNavMeshReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowNavMeshReq_CmdId[GMShowNavMeshReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowNavMeshReq_CmdId[GMShowNavMeshReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GMShowNavMeshReq_CmdId = exports.GMShowNavMeshReq_CmdId || (exports.GMShowNavMeshReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PBNavMeshPoly.EdgeType
 */
var PBNavMeshPoly_EdgeType;
(function (PBNavMeshPoly_EdgeType) {
    /**
     * @generated from protobuf enum value: INNER = 0;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["INNER"] = 0] = "INNER";
    /**
     * @generated from protobuf enum value: TILE_BOUND = 1;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND"] = 1] = "TILE_BOUND";
    /**
     * @generated from protobuf enum value: TILE_BOUND_UNCONNECT = 2;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND_UNCONNECT"] = 2] = "TILE_BOUND_UNCONNECT";
    /**
     * @generated from protobuf enum value: TILE_BOUND_OVERIDE = 3;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND_OVERIDE"] = 3] = "TILE_BOUND_OVERIDE";
})(PBNavMeshPoly_EdgeType = exports.PBNavMeshPoly_EdgeType || (exports.PBNavMeshPoly_EdgeType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GMShowNavMeshRsp.CmdId
 */
var GMShowNavMeshRsp_CmdId;
(function (GMShowNavMeshRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowNavMeshRsp_CmdId[GMShowNavMeshRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2400;
     */
    GMShowNavMeshRsp_CmdId[GMShowNavMeshRsp_CmdId["CMD_ID"] = 2400] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GMShowNavMeshRsp_CmdId[GMShowNavMeshRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GMShowNavMeshRsp_CmdId[GMShowNavMeshRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GMShowNavMeshRsp_CmdId = exports.GMShowNavMeshRsp_CmdId || (exports.GMShowNavMeshRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NavMeshStatsNotify.CmdId
 */
var NavMeshStatsNotify_CmdId;
(function (NavMeshStatsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NavMeshStatsNotify_CmdId[NavMeshStatsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2316;
     */
    NavMeshStatsNotify_CmdId[NavMeshStatsNotify_CmdId["CMD_ID"] = 2316] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NavMeshStatsNotify_CmdId[NavMeshStatsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NavMeshStatsNotify_CmdId[NavMeshStatsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NavMeshStatsNotify_CmdId[NavMeshStatsNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(NavMeshStatsNotify_CmdId = exports.NavMeshStatsNotify_CmdId || (exports.NavMeshStatsNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class QueryFilter$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryFilter", [
            { no: 9, name: "type_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "area_mask", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 type_id */ 9:
                    message.typeId = reader.int32();
                    break;
                case /* optional int32 area_mask */ 13:
                    message.areaMask = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 type_id = 9; */
        if (message.typeId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.typeId);
        /* optional int32 area_mask = 13; */
        if (message.areaMask !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.areaMask);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryFilter
 */
exports.QueryFilter = new QueryFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryPathReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryPathReq", [
            { no: 13, name: "query_type", kind: "enum", opt: true, T: () => ["com.midnights.game.QueryPathReq.OptionType", QueryPathReq_OptionType] },
            { no: 6, name: "source_extend", kind: "message", T: () => define_3.Vector3Int },
            { no: 2, name: "source_pos", kind: "message", T: () => define_2.Vector },
            { no: 12, name: "filter", kind: "message", T: () => exports.QueryFilter },
            { no: 15, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "destination_extend", kind: "message", T: () => define_3.Vector3Int },
            { no: 10, name: "destination_pos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Vector },
            { no: 11, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { destinationPos: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.QueryPathReq.OptionType query_type */ 13:
                    message.queryType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector3Int source_extend */ 6:
                    message.sourceExtend = define_3.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.sourceExtend);
                    break;
                case /* optional com.midnights.game.Vector source_pos */ 2:
                    message.sourcePos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.sourcePos);
                    break;
                case /* optional com.midnights.game.QueryFilter filter */ 12:
                    message.filter = exports.QueryFilter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* optional int32 query_id */ 15:
                    message.queryId = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector3Int destination_extend */ 4:
                    message.destinationExtend = define_3.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.destinationExtend);
                    break;
                case /* repeated com.midnights.game.Vector destination_pos */ 10:
                    message.destinationPos.push(define_2.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 11:
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
        /* optional com.midnights.game.QueryPathReq.OptionType query_type = 13; */
        if (message.queryType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.queryType);
        /* optional com.midnights.game.Vector3Int source_extend = 6; */
        if (message.sourceExtend)
            define_3.Vector3Int.internalBinaryWrite(message.sourceExtend, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector source_pos = 2; */
        if (message.sourcePos)
            define_2.Vector.internalBinaryWrite(message.sourcePos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.QueryFilter filter = 12; */
        if (message.filter)
            exports.QueryFilter.internalBinaryWrite(message.filter, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 query_id = 15; */
        if (message.queryId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.queryId);
        /* optional com.midnights.game.Vector3Int destination_extend = 4; */
        if (message.destinationExtend)
            define_3.Vector3Int.internalBinaryWrite(message.destinationExtend, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.Vector destination_pos = 10; */
        for (let i = 0; i < message.destinationPos.length; i++)
            define_2.Vector.internalBinaryWrite(message.destinationPos[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 11; */
        if (message.sceneId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryPathReq
 */
exports.QueryPathReq = new QueryPathReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryPathRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryPathRsp", [
            { no: 12, name: "query_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "corners", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Vector },
            { no: 8, name: "query_status", kind: "enum", opt: true, T: () => ["com.midnights.game.QueryPathRsp.PathStatusType", QueryPathRsp_PathStatusType] },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { corners: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 query_id */ 12:
                    message.queryId = reader.int32();
                    break;
                case /* repeated com.midnights.game.Vector corners */ 6:
                    message.corners.push(define_2.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.QueryPathRsp.PathStatusType query_status */ 8:
                    message.queryStatus = reader.int32();
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
        /* optional int32 query_id = 12; */
        if (message.queryId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.queryId);
        /* repeated com.midnights.game.Vector corners = 6; */
        for (let i = 0; i < message.corners.length; i++)
            define_2.Vector.internalBinaryWrite(message.corners[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.QueryPathRsp.PathStatusType query_status = 8; */
        if (message.queryStatus !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.queryStatus);
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
 * @generated MessageType for protobuf message com.midnights.game.QueryPathRsp
 */
exports.QueryPathRsp = new QueryPathRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ObstacleInfo", [
            { no: 4, name: "rotation", kind: "message", T: () => define_1.MathQuaternion },
            { no: 2, name: "obstacle_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "center", kind: "message", T: () => define_2.Vector },
            { no: 6, name: "shape", kind: "enum", opt: true, T: () => ["com.midnights.game.ObstacleInfo.ShapeType", ObstacleInfo_ShapeType] },
            { no: 12, name: "extents", kind: "message", T: () => define_3.Vector3Int }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.MathQuaternion rotation */ 4:
                    message.rotation = define_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* optional int32 obstacle_id */ 2:
                    message.obstacleId = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector center */ 14:
                    message.center = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.ObstacleInfo.ShapeType shape */ 6:
                    message.shape = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector3Int extents */ 12:
                    message.extents = define_3.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.MathQuaternion rotation = 4; */
        if (message.rotation)
            define_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 obstacle_id = 2; */
        if (message.obstacleId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.obstacleId);
        /* optional com.midnights.game.Vector center = 14; */
        if (message.center)
            define_2.Vector.internalBinaryWrite(message.center, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ObstacleInfo.ShapeType shape = 6; */
        if (message.shape !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.shape);
        /* optional com.midnights.game.Vector3Int extents = 12; */
        if (message.extents)
            define_3.Vector3Int.internalBinaryWrite(message.extents, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ObstacleInfo
 */
exports.ObstacleInfo = new ObstacleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ObstacleModifyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ObstacleModifyNotify", [
            { no: 9, name: "remove_obstacle_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "add_obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ObstacleInfo },
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { removeObstacleIds: [], addObstacles: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 remove_obstacle_ids */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removeObstacleIds.push(reader.int32());
                    else
                        message.removeObstacleIds.push(reader.int32());
                    break;
                case /* repeated com.midnights.game.ObstacleInfo add_obstacles */ 6:
                    message.addObstacles.push(exports.ObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 5:
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
        /* repeated int32 remove_obstacle_ids = 9; */
        if (message.removeObstacleIds.length) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removeObstacleIds.length; i++)
                writer.int32(message.removeObstacleIds[i]);
            writer.join();
        }
        /* repeated com.midnights.game.ObstacleInfo add_obstacles = 6; */
        for (let i = 0; i < message.addObstacles.length; i++)
            exports.ObstacleInfo.internalBinaryWrite(message.addObstacles[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ObstacleModifyNotify
 */
exports.ObstacleModifyNotify = new ObstacleModifyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathfindingPingNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PathfindingPingNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.PathfindingPingNotify
 */
exports.PathfindingPingNotify = new PathfindingPingNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathfindingEnterSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PathfindingEnterSceneReq", [
            { no: 12, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "activity_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scene_tag_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_editor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ObstacleInfo },
            { no: 4, name: "polygon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { activityId: [], obstacles: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 activity_id */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activityId.push(reader.uint32());
                    else
                        message.activityId.push(reader.uint32());
                    break;
                case /* optional uint32 scene_tag_hash */ 15:
                    message.sceneTagHash = reader.uint32();
                    break;
                case /* optional uint32 version */ 6:
                    message.version = reader.uint32();
                    break;
                case /* optional bool is_editor */ 11:
                    message.isEditor = reader.bool();
                    break;
                case /* repeated com.midnights.game.ObstacleInfo obstacles */ 13:
                    message.obstacles.push(exports.ObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 polygon_id */ 4:
                    message.polygonId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 12; */
        if (message.sceneId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 activity_id = 14; */
        if (message.activityId.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activityId.length; i++)
                writer.uint32(message.activityId[i]);
            writer.join();
        }
        /* optional uint32 scene_tag_hash = 15; */
        if (message.sceneTagHash !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneTagHash);
        /* optional uint32 version = 6; */
        if (message.version !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.version);
        /* optional bool is_editor = 11; */
        if (message.isEditor !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isEditor);
        /* repeated com.midnights.game.ObstacleInfo obstacles = 13; */
        for (let i = 0; i < message.obstacles.length; i++)
            exports.ObstacleInfo.internalBinaryWrite(message.obstacles[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 polygon_id = 4; */
        if (message.polygonId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.polygonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PathfindingEnterSceneReq
 */
exports.PathfindingEnterSceneReq = new PathfindingEnterSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PathfindingEnterSceneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PathfindingEnterSceneRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.PathfindingEnterSceneRsp
 */
exports.PathfindingEnterSceneRsp = new PathfindingEnterSceneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GMShowObstacleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GMShowObstacleReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GMShowObstacleReq
 */
exports.GMShowObstacleReq = new GMShowObstacleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GMObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GMObstacleInfo", [
            { no: 14, name: "timestamp", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "shape", kind: "enum", opt: true, T: () => ["com.midnights.game.ObstacleInfo.ShapeType", ObstacleInfo_ShapeType] },
            { no: 13, name: "obstacle_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "rotation", kind: "message", T: () => define_1.MathQuaternion },
            { no: 8, name: "center", kind: "message", T: () => define_2.Vector },
            { no: 15, name: "extents", kind: "message", T: () => define_3.Vector3Int }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int64 timestamp */ 14:
                    message.timestamp = reader.int64().toBigInt();
                    break;
                case /* optional com.midnights.game.ObstacleInfo.ShapeType shape */ 2:
                    message.shape = reader.int32();
                    break;
                case /* optional int32 obstacle_id */ 13:
                    message.obstacleId = reader.int32();
                    break;
                case /* optional com.midnights.game.MathQuaternion rotation */ 3:
                    message.rotation = define_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* optional com.midnights.game.Vector center */ 8:
                    message.center = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector3Int extents */ 15:
                    message.extents = define_3.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int64 timestamp = 14; */
        if (message.timestamp !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int64(message.timestamp);
        /* optional com.midnights.game.ObstacleInfo.ShapeType shape = 2; */
        if (message.shape !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.shape);
        /* optional int32 obstacle_id = 13; */
        if (message.obstacleId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.obstacleId);
        /* optional com.midnights.game.MathQuaternion rotation = 3; */
        if (message.rotation)
            define_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector center = 8; */
        if (message.center)
            define_2.Vector.internalBinaryWrite(message.center, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector3Int extents = 15; */
        if (message.extents)
            define_3.Vector3Int.internalBinaryWrite(message.extents, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GMObstacleInfo
 */
exports.GMObstacleInfo = new GMObstacleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GMShowObstacleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GMShowObstacleRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GMObstacleInfo }
        ]);
    }
    create(value) {
        const message = { obstacles: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.GMObstacleInfo obstacles */ 6:
                    message.obstacles.push(exports.GMObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.GMObstacleInfo obstacles = 6; */
        for (let i = 0; i < message.obstacles.length; i++)
            exports.GMObstacleInfo.internalBinaryWrite(message.obstacles[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GMShowObstacleRsp
 */
exports.GMShowObstacleRsp = new GMShowObstacleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GMShowNavMeshReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GMShowNavMeshReq", [
            { no: 1, name: "center", kind: "message", T: () => define_2.Vector },
            { no: 5, name: "extent", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector center */ 1:
                    message.center = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector extent */ 5:
                    message.extent = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extent);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector center = 1; */
        if (message.center)
            define_2.Vector.internalBinaryWrite(message.center, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector extent = 5; */
        if (message.extent)
            define_2.Vector.internalBinaryWrite(message.extent, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GMShowNavMeshReq
 */
exports.GMShowNavMeshReq = new GMShowNavMeshReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PBNavMeshPoly$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PBNavMeshPoly", [
            { no: 10, name: "edge_types", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.PBNavMeshPoly.EdgeType", PBNavMeshPoly_EdgeType] },
            { no: 6, name: "area", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "vects", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { edgeTypes: [], vects: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PBNavMeshPoly.EdgeType edge_types */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.edgeTypes.push(reader.int32());
                    else
                        message.edgeTypes.push(reader.int32());
                    break;
                case /* optional int32 area */ 6:
                    message.area = reader.int32();
                    break;
                case /* repeated int32 vects */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.vects.push(reader.int32());
                    else
                        message.vects.push(reader.int32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.PBNavMeshPoly.EdgeType edge_types = 10; */
        if (message.edgeTypes.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.edgeTypes.length; i++)
                writer.int32(message.edgeTypes[i]);
            writer.join();
        }
        /* optional int32 area = 6; */
        if (message.area !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.area);
        /* repeated int32 vects = 7; */
        if (message.vects.length) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.vects.length; i++)
                writer.int32(message.vects[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PBNavMeshPoly
 */
exports.PBNavMeshPoly = new PBNavMeshPoly$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PBNavMeshTile$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PBNavMeshTile", [
            { no: 4, name: "vecs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Vector },
            { no: 8, name: "polys", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PBNavMeshPoly }
        ]);
    }
    create(value) {
        const message = { vecs: [], polys: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.Vector vecs */ 4:
                    message.vecs.push(define_2.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.PBNavMeshPoly polys */ 8:
                    message.polys.push(exports.PBNavMeshPoly.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Vector vecs = 4; */
        for (let i = 0; i < message.vecs.length; i++)
            define_2.Vector.internalBinaryWrite(message.vecs[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.PBNavMeshPoly polys = 8; */
        for (let i = 0; i < message.polys.length; i++)
            exports.PBNavMeshPoly.internalBinaryWrite(message.polys[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PBNavMeshTile
 */
exports.PBNavMeshTile = new PBNavMeshTile$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GMShowNavMeshRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GMShowNavMeshRsp", [
            { no: 11, name: "tiles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PBNavMeshTile },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { tiles: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PBNavMeshTile tiles */ 11:
                    message.tiles.push(exports.PBNavMeshTile.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PBNavMeshTile tiles = 11; */
        for (let i = 0; i < message.tiles.length; i++)
            exports.PBNavMeshTile.internalBinaryWrite(message.tiles[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GMShowNavMeshRsp
 */
exports.GMShowNavMeshRsp = new GMShowNavMeshRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PbNavMeshStatsInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PbNavMeshStatsInfo", [
            { no: 10, name: "authority_ai_in_combat", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "no_authority_ai_in_combat", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "total_authority_ai", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "total_no_authority_ai", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 authority_ai_in_combat */ 10:
                    message.authorityAiInCombat = reader.int32();
                    break;
                case /* optional int32 no_authority_ai_in_combat */ 11:
                    message.noAuthorityAiInCombat = reader.int32();
                    break;
                case /* optional int32 total_authority_ai */ 8:
                    message.totalAuthorityAi = reader.int32();
                    break;
                case /* optional int32 total_no_authority_ai */ 13:
                    message.totalNoAuthorityAi = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 authority_ai_in_combat = 10; */
        if (message.authorityAiInCombat !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.authorityAiInCombat);
        /* optional int32 no_authority_ai_in_combat = 11; */
        if (message.noAuthorityAiInCombat !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.noAuthorityAiInCombat);
        /* optional int32 total_authority_ai = 8; */
        if (message.totalAuthorityAi !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.totalAuthorityAi);
        /* optional int32 total_no_authority_ai = 13; */
        if (message.totalNoAuthorityAi !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.totalNoAuthorityAi);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PbNavMeshStatsInfo
 */
exports.PbNavMeshStatsInfo = new PbNavMeshStatsInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NavMeshStatsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NavMeshStatsNotify", [
            { no: 4, name: "infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PbNavMeshStatsInfo }
        ]);
    }
    create(value) {
        const message = { infos: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PbNavMeshStatsInfo infos */ 4:
                    message.infos.push(exports.PbNavMeshStatsInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.PbNavMeshStatsInfo infos = 4; */
        for (let i = 0; i < message.infos.length; i++)
            exports.PbNavMeshStatsInfo.internalBinaryWrite(message.infos[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NavMeshStatsNotify
 */
exports.NavMeshStatsNotify = new NavMeshStatsNotify$Type();
