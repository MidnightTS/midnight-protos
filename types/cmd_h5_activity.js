"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetH5ActivityRedDotTimestampRsp = exports.SetH5ActivityRedDotTimestampReq = exports.H5ActivityIdsNotify = exports.GetAllH5ActivityInfoRsp = exports.GetAllH5ActivityInfoReq = exports.H5ActivityInfo = exports.SetH5ActivityRedDotTimestampRsp_CmdId = exports.SetH5ActivityRedDotTimestampReq_CmdId = exports.H5ActivityIdsNotify_CmdId = exports.GetAllH5ActivityInfoRsp_CmdId = exports.GetAllH5ActivityInfoReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.GetAllH5ActivityInfoReq.CmdId
 */
var GetAllH5ActivityInfoReq_CmdId;
(function (GetAllH5ActivityInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllH5ActivityInfoReq_CmdId[GetAllH5ActivityInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5668;
     */
    GetAllH5ActivityInfoReq_CmdId[GetAllH5ActivityInfoReq_CmdId["CMD_ID"] = 5668] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllH5ActivityInfoReq_CmdId[GetAllH5ActivityInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllH5ActivityInfoReq_CmdId[GetAllH5ActivityInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllH5ActivityInfoReq_CmdId[GetAllH5ActivityInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllH5ActivityInfoReq_CmdId = exports.GetAllH5ActivityInfoReq_CmdId || (exports.GetAllH5ActivityInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllH5ActivityInfoRsp.CmdId
 */
var GetAllH5ActivityInfoRsp_CmdId;
(function (GetAllH5ActivityInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllH5ActivityInfoRsp_CmdId[GetAllH5ActivityInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5676;
     */
    GetAllH5ActivityInfoRsp_CmdId[GetAllH5ActivityInfoRsp_CmdId["CMD_ID"] = 5676] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllH5ActivityInfoRsp_CmdId[GetAllH5ActivityInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllH5ActivityInfoRsp_CmdId[GetAllH5ActivityInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAllH5ActivityInfoRsp_CmdId = exports.GetAllH5ActivityInfoRsp_CmdId || (exports.GetAllH5ActivityInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.H5ActivityIdsNotify.CmdId
 */
var H5ActivityIdsNotify_CmdId;
(function (H5ActivityIdsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    H5ActivityIdsNotify_CmdId[H5ActivityIdsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5675;
     */
    H5ActivityIdsNotify_CmdId[H5ActivityIdsNotify_CmdId["CMD_ID"] = 5675] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    H5ActivityIdsNotify_CmdId[H5ActivityIdsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    H5ActivityIdsNotify_CmdId[H5ActivityIdsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(H5ActivityIdsNotify_CmdId = exports.H5ActivityIdsNotify_CmdId || (exports.H5ActivityIdsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetH5ActivityRedDotTimestampReq.CmdId
 */
var SetH5ActivityRedDotTimestampReq_CmdId;
(function (SetH5ActivityRedDotTimestampReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetH5ActivityRedDotTimestampReq_CmdId[SetH5ActivityRedDotTimestampReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5657;
     */
    SetH5ActivityRedDotTimestampReq_CmdId[SetH5ActivityRedDotTimestampReq_CmdId["CMD_ID"] = 5657] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetH5ActivityRedDotTimestampReq_CmdId[SetH5ActivityRedDotTimestampReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetH5ActivityRedDotTimestampReq_CmdId[SetH5ActivityRedDotTimestampReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetH5ActivityRedDotTimestampReq_CmdId = exports.SetH5ActivityRedDotTimestampReq_CmdId || (exports.SetH5ActivityRedDotTimestampReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetH5ActivityRedDotTimestampRsp.CmdId
 */
var SetH5ActivityRedDotTimestampRsp_CmdId;
(function (SetH5ActivityRedDotTimestampRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetH5ActivityRedDotTimestampRsp_CmdId[SetH5ActivityRedDotTimestampRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5652;
     */
    SetH5ActivityRedDotTimestampRsp_CmdId[SetH5ActivityRedDotTimestampRsp_CmdId["CMD_ID"] = 5652] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetH5ActivityRedDotTimestampRsp_CmdId[SetH5ActivityRedDotTimestampRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetH5ActivityRedDotTimestampRsp_CmdId[SetH5ActivityRedDotTimestampRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetH5ActivityRedDotTimestampRsp_CmdId = exports.SetH5ActivityRedDotTimestampRsp_CmdId || (exports.SetH5ActivityRedDotTimestampRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class H5ActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.H5ActivityInfo", [
            { no: 3, name: "h5_activity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "is_entrance_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "h5_schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "prefab_path", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "content_close_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 h5_activity_id */ 3:
                    message.h5ActivityId = reader.uint32();
                    break;
                case /* optional string url */ 4:
                    message.url = reader.string();
                    break;
                case /* optional bool is_entrance_open */ 7:
                    message.isEntranceOpen = reader.bool();
                    break;
                case /* optional uint32 h5_schedule_id */ 8:
                    message.h5ScheduleId = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 10:
                    message.endTime = reader.uint32();
                    break;
                case /* optional string prefab_path */ 11:
                    message.prefabPath = reader.string();
                    break;
                case /* optional uint32 content_close_time */ 2:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 13:
                    message.beginTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 h5_activity_id = 3; */
        if (message.h5ActivityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.h5ActivityId);
        /* optional string url = 4; */
        if (message.url !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.url);
        /* optional bool is_entrance_open = 7; */
        if (message.isEntranceOpen !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isEntranceOpen);
        /* optional uint32 h5_schedule_id = 8; */
        if (message.h5ScheduleId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.h5ScheduleId);
        /* optional uint32 end_time = 10; */
        if (message.endTime !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional string prefab_path = 11; */
        if (message.prefabPath !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.prefabPath);
        /* optional uint32 content_close_time = 2; */
        if (message.contentCloseTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* optional uint32 begin_time = 13; */
        if (message.beginTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.beginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.H5ActivityInfo
 */
exports.H5ActivityInfo = new H5ActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllH5ActivityInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllH5ActivityInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllH5ActivityInfoReq
 */
exports.GetAllH5ActivityInfoReq = new GetAllH5ActivityInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllH5ActivityInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllH5ActivityInfoRsp", [
            { no: 15, name: "h5_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.H5ActivityInfo },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "client_red_dot_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { h5ActivityInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.H5ActivityInfo h5_activity_info_list */ 15:
                    message.h5ActivityInfoList.push(exports.H5ActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 client_red_dot_timestamp */ 12:
                    message.clientRedDotTimestamp = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.H5ActivityInfo h5_activity_info_list = 15; */
        for (let i = 0; i < message.h5ActivityInfoList.length; i++)
            exports.H5ActivityInfo.internalBinaryWrite(message.h5ActivityInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 client_red_dot_timestamp = 12; */
        if (message.clientRedDotTimestamp !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.clientRedDotTimestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllH5ActivityInfoRsp
 */
exports.GetAllH5ActivityInfoRsp = new GetAllH5ActivityInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class H5ActivityIdsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.H5ActivityIdsNotify", [
            { no: 1, name: "client_red_dot_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "h5_activity_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { h5ActivityMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 client_red_dot_timestamp */ 1:
                    message.clientRedDotTimestamp = reader.uint32();
                    break;
                case /* map<uint32, uint32> h5_activity_map */ 12:
                    this.binaryReadMap12(message.h5ActivityMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.H5ActivityIdsNotify.h5_activity_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 client_red_dot_timestamp = 1; */
        if (message.clientRedDotTimestamp !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.clientRedDotTimestamp);
        /* map<uint32, uint32> h5_activity_map = 12; */
        for (let k of Object.keys(message.h5ActivityMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.h5ActivityMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.H5ActivityIdsNotify
 */
exports.H5ActivityIdsNotify = new H5ActivityIdsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetH5ActivityRedDotTimestampReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetH5ActivityRedDotTimestampReq", [
            { no: 13, name: "client_red_dot_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 client_red_dot_timestamp */ 13:
                    message.clientRedDotTimestamp = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 client_red_dot_timestamp = 13; */
        if (message.clientRedDotTimestamp !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.clientRedDotTimestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetH5ActivityRedDotTimestampReq
 */
exports.SetH5ActivityRedDotTimestampReq = new SetH5ActivityRedDotTimestampReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetH5ActivityRedDotTimestampRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetH5ActivityRedDotTimestampRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.SetH5ActivityRedDotTimestampRsp
 */
exports.SetH5ActivityRedDotTimestampRsp = new SetH5ActivityRedDotTimestampRsp$Type();
