"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenBlossomCircleCampGuideNotify = exports.BlossomChestCreateNotify = exports.WorldOwnerBlossomScheduleInfoNotify = exports.BlossomScheduleInfo = exports.WorldOwnerBlossomBriefInfoNotify = exports.BlossomBriefInfoNotify = exports.GetBlossomBriefInfoListRsp = exports.GetBlossomBriefInfoListReq = exports.BlossomBriefInfo = exports.BlossomScheduleState = exports.OpenBlossomCircleCampGuideNotify_CmdId = exports.BlossomChestCreateNotify_CmdId = exports.WorldOwnerBlossomScheduleInfoNotify_CmdId = exports.WorldOwnerBlossomBriefInfoNotify_CmdId = exports.BlossomBriefInfoNotify_CmdId = exports.GetBlossomBriefInfoListRsp_CmdId = exports.GetBlossomBriefInfoListReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GetBlossomBriefInfoListReq.CmdId
 */
var GetBlossomBriefInfoListReq_CmdId;
(function (GetBlossomBriefInfoListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBlossomBriefInfoListReq_CmdId[GetBlossomBriefInfoListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2772;
     */
    GetBlossomBriefInfoListReq_CmdId[GetBlossomBriefInfoListReq_CmdId["CMD_ID"] = 2772] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBlossomBriefInfoListReq_CmdId[GetBlossomBriefInfoListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBlossomBriefInfoListReq_CmdId[GetBlossomBriefInfoListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBlossomBriefInfoListReq_CmdId[GetBlossomBriefInfoListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetBlossomBriefInfoListReq_CmdId = exports.GetBlossomBriefInfoListReq_CmdId || (exports.GetBlossomBriefInfoListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBlossomBriefInfoListRsp.CmdId
 */
var GetBlossomBriefInfoListRsp_CmdId;
(function (GetBlossomBriefInfoListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBlossomBriefInfoListRsp_CmdId[GetBlossomBriefInfoListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2798;
     */
    GetBlossomBriefInfoListRsp_CmdId[GetBlossomBriefInfoListRsp_CmdId["CMD_ID"] = 2798] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBlossomBriefInfoListRsp_CmdId[GetBlossomBriefInfoListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBlossomBriefInfoListRsp_CmdId[GetBlossomBriefInfoListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBlossomBriefInfoListRsp_CmdId[GetBlossomBriefInfoListRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetBlossomBriefInfoListRsp_CmdId = exports.GetBlossomBriefInfoListRsp_CmdId || (exports.GetBlossomBriefInfoListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BlossomBriefInfoNotify.CmdId
 */
var BlossomBriefInfoNotify_CmdId;
(function (BlossomBriefInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomBriefInfoNotify_CmdId[BlossomBriefInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2712;
     */
    BlossomBriefInfoNotify_CmdId[BlossomBriefInfoNotify_CmdId["CMD_ID"] = 2712] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomBriefInfoNotify_CmdId[BlossomBriefInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BlossomBriefInfoNotify_CmdId[BlossomBriefInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BlossomBriefInfoNotify_CmdId[BlossomBriefInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BlossomBriefInfoNotify_CmdId = exports.BlossomBriefInfoNotify_CmdId || (exports.BlossomBriefInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldOwnerBlossomBriefInfoNotify.CmdId
 */
var WorldOwnerBlossomBriefInfoNotify_CmdId;
(function (WorldOwnerBlossomBriefInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerBlossomBriefInfoNotify_CmdId[WorldOwnerBlossomBriefInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2735;
     */
    WorldOwnerBlossomBriefInfoNotify_CmdId[WorldOwnerBlossomBriefInfoNotify_CmdId["CMD_ID"] = 2735] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerBlossomBriefInfoNotify_CmdId[WorldOwnerBlossomBriefInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerBlossomBriefInfoNotify_CmdId[WorldOwnerBlossomBriefInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerBlossomBriefInfoNotify_CmdId[WorldOwnerBlossomBriefInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldOwnerBlossomBriefInfoNotify_CmdId = exports.WorldOwnerBlossomBriefInfoNotify_CmdId || (exports.WorldOwnerBlossomBriefInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldOwnerBlossomScheduleInfoNotify.CmdId
 */
var WorldOwnerBlossomScheduleInfoNotify_CmdId;
(function (WorldOwnerBlossomScheduleInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerBlossomScheduleInfoNotify_CmdId[WorldOwnerBlossomScheduleInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2707;
     */
    WorldOwnerBlossomScheduleInfoNotify_CmdId[WorldOwnerBlossomScheduleInfoNotify_CmdId["CMD_ID"] = 2707] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerBlossomScheduleInfoNotify_CmdId[WorldOwnerBlossomScheduleInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerBlossomScheduleInfoNotify_CmdId[WorldOwnerBlossomScheduleInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerBlossomScheduleInfoNotify_CmdId[WorldOwnerBlossomScheduleInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldOwnerBlossomScheduleInfoNotify_CmdId = exports.WorldOwnerBlossomScheduleInfoNotify_CmdId || (exports.WorldOwnerBlossomScheduleInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BlossomChestCreateNotify.CmdId
 */
var BlossomChestCreateNotify_CmdId;
(function (BlossomChestCreateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomChestCreateNotify_CmdId[BlossomChestCreateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2721;
     */
    BlossomChestCreateNotify_CmdId[BlossomChestCreateNotify_CmdId["CMD_ID"] = 2721] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomChestCreateNotify_CmdId[BlossomChestCreateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BlossomChestCreateNotify_CmdId[BlossomChestCreateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BlossomChestCreateNotify_CmdId[BlossomChestCreateNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BlossomChestCreateNotify_CmdId = exports.BlossomChestCreateNotify_CmdId || (exports.BlossomChestCreateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpenBlossomCircleCampGuideNotify.CmdId
 */
var OpenBlossomCircleCampGuideNotify_CmdId;
(function (OpenBlossomCircleCampGuideNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenBlossomCircleCampGuideNotify_CmdId[OpenBlossomCircleCampGuideNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2703;
     */
    OpenBlossomCircleCampGuideNotify_CmdId[OpenBlossomCircleCampGuideNotify_CmdId["CMD_ID"] = 2703] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenBlossomCircleCampGuideNotify_CmdId[OpenBlossomCircleCampGuideNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpenBlossomCircleCampGuideNotify_CmdId[OpenBlossomCircleCampGuideNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpenBlossomCircleCampGuideNotify_CmdId[OpenBlossomCircleCampGuideNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(OpenBlossomCircleCampGuideNotify_CmdId = exports.OpenBlossomCircleCampGuideNotify_CmdId || (exports.OpenBlossomCircleCampGuideNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BlossomScheduleState
 */
var BlossomScheduleState;
(function (BlossomScheduleState) {
    /**
     * @generated from protobuf enum value: BLOSSOM_SCHEDULE_NONE = 0;
     */
    BlossomScheduleState[BlossomScheduleState["BLOSSOM_SCHEDULE_NONE"] = 0] = "BLOSSOM_SCHEDULE_NONE";
    /**
     * @generated from protobuf enum value: BLOSSOM_SCHEDULE_INIT = 1;
     */
    BlossomScheduleState[BlossomScheduleState["BLOSSOM_SCHEDULE_INIT"] = 1] = "BLOSSOM_SCHEDULE_INIT";
    /**
     * @generated from protobuf enum value: BLOSSOM_SCHEDULE_IN_PROGRESS = 2;
     */
    BlossomScheduleState[BlossomScheduleState["BLOSSOM_SCHEDULE_IN_PROGRESS"] = 2] = "BLOSSOM_SCHEDULE_IN_PROGRESS";
    /**
     * @generated from protobuf enum value: BLOSSOM_SCHEDULE_REWARD = 3;
     */
    BlossomScheduleState[BlossomScheduleState["BLOSSOM_SCHEDULE_REWARD"] = 3] = "BLOSSOM_SCHEDULE_REWARD";
})(BlossomScheduleState = exports.BlossomScheduleState || (exports.BlossomScheduleState = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BlossomBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomBriefInfo", [
            { no: 13, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_guide_opened", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "monster_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "circle_camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "pos", kind: "message", T: () => define_1.Vector },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 refresh_id */ 13:
                    message.refreshId = reader.uint32();
                    break;
                case /* optional uint32 reward_id */ 5:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 10:
                    message.cityId = reader.uint32();
                    break;
                case /* optional uint32 resin */ 11:
                    message.resin = reader.uint32();
                    break;
                case /* optional uint32 state */ 7:
                    message.state = reader.uint32();
                    break;
                case /* optional bool is_guide_opened */ 1:
                    message.isGuideOpened = reader.bool();
                    break;
                case /* optional uint32 monster_level */ 8:
                    message.monsterLevel = reader.uint32();
                    break;
                case /* optional uint32 circle_camp_id */ 15:
                    message.circleCampId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 12:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 scene_id */ 9:
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
        /* optional uint32 refresh_id = 13; */
        if (message.refreshId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* optional uint32 reward_id = 5; */
        if (message.rewardId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* optional uint32 city_id = 10; */
        if (message.cityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional uint32 resin = 11; */
        if (message.resin !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.resin);
        /* optional uint32 state = 7; */
        if (message.state !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.state);
        /* optional bool is_guide_opened = 1; */
        if (message.isGuideOpened !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isGuideOpened);
        /* optional uint32 monster_level = 8; */
        if (message.monsterLevel !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.monsterLevel);
        /* optional uint32 circle_camp_id = 15; */
        if (message.circleCampId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.circleCampId);
        /* optional com.midnights.game.Vector pos = 12; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomBriefInfo
 */
exports.BlossomBriefInfo = new BlossomBriefInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBlossomBriefInfoListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBlossomBriefInfoListReq", [
            { no: 4, name: "city_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 city_id_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cityIdList.push(reader.uint32());
                    else
                        message.cityIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 city_id_list = 4; */
        for (let i = 0; i < message.cityIdList.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cityIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBlossomBriefInfoListReq
 */
exports.GetBlossomBriefInfoListReq = new GetBlossomBriefInfoListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBlossomBriefInfoListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBlossomBriefInfoListRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "brief_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.BlossomBriefInfo }
        ]);
    }
    create(value) {
        const message = { briefInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.BlossomBriefInfo brief_info_list */ 11:
                    message.briefInfoList.push(exports.BlossomBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.BlossomBriefInfo brief_info_list = 11; */
        for (let i = 0; i < message.briefInfoList.length; i++)
            exports.BlossomBriefInfo.internalBinaryWrite(message.briefInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBlossomBriefInfoListRsp
 */
exports.GetBlossomBriefInfoListRsp = new GetBlossomBriefInfoListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlossomBriefInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomBriefInfoNotify", [
            { no: 4, name: "brief_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.BlossomBriefInfo }
        ]);
    }
    create(value) {
        const message = { briefInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.BlossomBriefInfo brief_info_list */ 4:
                    message.briefInfoList.push(exports.BlossomBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.BlossomBriefInfo brief_info_list = 4; */
        for (let i = 0; i < message.briefInfoList.length; i++)
            exports.BlossomBriefInfo.internalBinaryWrite(message.briefInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomBriefInfoNotify
 */
exports.BlossomBriefInfoNotify = new BlossomBriefInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldOwnerBlossomBriefInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldOwnerBlossomBriefInfoNotify", [
            { no: 13, name: "brief_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.BlossomBriefInfo }
        ]);
    }
    create(value) {
        const message = { briefInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.BlossomBriefInfo brief_info_list */ 13:
                    message.briefInfoList.push(exports.BlossomBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.BlossomBriefInfo brief_info_list = 13; */
        for (let i = 0; i < message.briefInfoList.length; i++)
            exports.BlossomBriefInfo.internalBinaryWrite(message.briefInfoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldOwnerBlossomBriefInfoNotify
 */
exports.WorldOwnerBlossomBriefInfoNotify = new WorldOwnerBlossomBriefInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlossomScheduleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomScheduleInfo", [
            { no: 13, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "circle_camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "finish_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 progress */ 13:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 state */ 10:
                    message.state = reader.uint32();
                    break;
                case /* optional uint32 round */ 4:
                    message.round = reader.uint32();
                    break;
                case /* optional uint32 circle_camp_id */ 15:
                    message.circleCampId = reader.uint32();
                    break;
                case /* optional uint32 refresh_id */ 6:
                    message.refreshId = reader.uint32();
                    break;
                case /* optional uint32 finish_progress */ 14:
                    message.finishProgress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 progress = 13; */
        if (message.progress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 state = 10; */
        if (message.state !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.state);
        /* optional uint32 round = 4; */
        if (message.round !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.round);
        /* optional uint32 circle_camp_id = 15; */
        if (message.circleCampId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.circleCampId);
        /* optional uint32 refresh_id = 6; */
        if (message.refreshId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* optional uint32 finish_progress = 14; */
        if (message.finishProgress !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.finishProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomScheduleInfo
 */
exports.BlossomScheduleInfo = new BlossomScheduleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldOwnerBlossomScheduleInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldOwnerBlossomScheduleInfoNotify", [
            { no: 3, name: "schedule_info", kind: "message", T: () => exports.BlossomScheduleInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.BlossomScheduleInfo schedule_info */ 3:
                    message.scheduleInfo = exports.BlossomScheduleInfo.internalBinaryRead(reader, reader.uint32(), options, message.scheduleInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.BlossomScheduleInfo schedule_info = 3; */
        if (message.scheduleInfo)
            exports.BlossomScheduleInfo.internalBinaryWrite(message.scheduleInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldOwnerBlossomScheduleInfoNotify
 */
exports.WorldOwnerBlossomScheduleInfoNotify = new WorldOwnerBlossomScheduleInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlossomChestCreateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomChestCreateNotify", [
            { no: 1, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "circle_camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 refresh_id */ 1:
                    message.refreshId = reader.uint32();
                    break;
                case /* optional uint32 circle_camp_id */ 10:
                    message.circleCampId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 refresh_id = 1; */
        if (message.refreshId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* optional uint32 circle_camp_id = 10; */
        if (message.circleCampId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.circleCampId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomChestCreateNotify
 */
exports.BlossomChestCreateNotify = new BlossomChestCreateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenBlossomCircleCampGuideNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpenBlossomCircleCampGuideNotify", [
            { no: 7, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "circle_camp_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { circleCampIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 refresh_id */ 7:
                    message.refreshId = reader.uint32();
                    break;
                case /* repeated uint32 circle_camp_id_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.circleCampIdList.push(reader.uint32());
                    else
                        message.circleCampIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 refresh_id = 7; */
        if (message.refreshId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* repeated uint32 circle_camp_id_list = 11; */
        for (let i = 0; i < message.circleCampIdList.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.circleCampIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpenBlossomCircleCampGuideNotify
 */
exports.OpenBlossomCircleCampGuideNotify = new OpenBlossomCircleCampGuideNotify$Type();
