"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpActivityUpdateNotify = exports.OpActivityDataNotify = exports.GetOpActivityInfoRsp = exports.GetOpActivityInfoReq = exports.BonusOpActivityInfo = exports.OpActivityInfo = exports.OpActivityUpdateNotify_CmdId = exports.OpActivityDataNotify_CmdId = exports.GetOpActivityInfoRsp_CmdId = exports.GetOpActivityInfoReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.GetOpActivityInfoReq.CmdId
 */
var GetOpActivityInfoReq_CmdId;
(function (GetOpActivityInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetOpActivityInfoReq_CmdId[GetOpActivityInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5172;
     */
    GetOpActivityInfoReq_CmdId[GetOpActivityInfoReq_CmdId["CMD_ID"] = 5172] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetOpActivityInfoReq_CmdId[GetOpActivityInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetOpActivityInfoReq_CmdId[GetOpActivityInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetOpActivityInfoReq_CmdId[GetOpActivityInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetOpActivityInfoReq_CmdId = exports.GetOpActivityInfoReq_CmdId || (exports.GetOpActivityInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetOpActivityInfoRsp.CmdId
 */
var GetOpActivityInfoRsp_CmdId;
(function (GetOpActivityInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetOpActivityInfoRsp_CmdId[GetOpActivityInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5198;
     */
    GetOpActivityInfoRsp_CmdId[GetOpActivityInfoRsp_CmdId["CMD_ID"] = 5198] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetOpActivityInfoRsp_CmdId[GetOpActivityInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetOpActivityInfoRsp_CmdId[GetOpActivityInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetOpActivityInfoRsp_CmdId = exports.GetOpActivityInfoRsp_CmdId || (exports.GetOpActivityInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpActivityDataNotify.CmdId
 */
var OpActivityDataNotify_CmdId;
(function (OpActivityDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityDataNotify_CmdId[OpActivityDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5112;
     */
    OpActivityDataNotify_CmdId[OpActivityDataNotify_CmdId["CMD_ID"] = 5112] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityDataNotify_CmdId[OpActivityDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpActivityDataNotify_CmdId[OpActivityDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OpActivityDataNotify_CmdId = exports.OpActivityDataNotify_CmdId || (exports.OpActivityDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpActivityUpdateNotify.CmdId
 */
var OpActivityUpdateNotify_CmdId;
(function (OpActivityUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityUpdateNotify_CmdId[OpActivityUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5135;
     */
    OpActivityUpdateNotify_CmdId[OpActivityUpdateNotify_CmdId["CMD_ID"] = 5135] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityUpdateNotify_CmdId[OpActivityUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpActivityUpdateNotify_CmdId[OpActivityUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OpActivityUpdateNotify_CmdId = exports.OpActivityUpdateNotify_CmdId || (exports.OpActivityUpdateNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpActivityInfo", [
            { no: 2, name: "activity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_has_change", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "bonus_info", kind: "message", oneof: "detail", T: () => exports.BonusOpActivityInfo }
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
                case /* optional uint32 activity_id */ 2:
                    message.activityId = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional bool is_has_change */ 1:
                    message.isHasChange = reader.bool();
                    break;
                case /* optional uint32 schedule_id */ 13:
                    message.scheduleId = reader.uint32();
                    break;
                case /* com.midnights.game.BonusOpActivityInfo bonus_info */ 12:
                    message.detail = {
                        oneofKind: "bonusInfo",
                        bonusInfo: exports.BonusOpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bonusInfo)
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
        /* optional uint32 activity_id = 2; */
        if (message.activityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.activityId);
        /* optional uint32 end_time = 6; */
        if (message.endTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 begin_time = 5; */
        if (message.beginTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* optional bool is_has_change = 1; */
        if (message.isHasChange !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isHasChange);
        /* optional uint32 schedule_id = 13; */
        if (message.scheduleId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* com.midnights.game.BonusOpActivityInfo bonus_info = 12; */
        if (message.detail.oneofKind === "bonusInfo")
            exports.BonusOpActivityInfo.internalBinaryWrite(message.detail.bonusInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityInfo
 */
exports.OpActivityInfo = new OpActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusOpActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BonusOpActivityInfo", [
            { no: 11, name: "left_bonus_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_bonus_count */ 11:
                    message.leftBonusCount = reader.uint32();
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
        /* optional uint32 left_bonus_count = 11; */
        if (message.leftBonusCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.leftBonusCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BonusOpActivityInfo
 */
exports.BonusOpActivityInfo = new BonusOpActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpActivityInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetOpActivityInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetOpActivityInfoReq
 */
exports.GetOpActivityInfoReq = new GetOpActivityInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOpActivityInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetOpActivityInfoRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "op_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.OpActivityInfo }
        ]);
    }
    create(value) {
        const message = { opActivityInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.OpActivityInfo op_activity_info_list */ 7:
                    message.opActivityInfoList.push(exports.OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.OpActivityInfo op_activity_info_list = 7; */
        for (let i = 0; i < message.opActivityInfoList.length; i++)
            exports.OpActivityInfo.internalBinaryWrite(message.opActivityInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetOpActivityInfoRsp
 */
exports.GetOpActivityInfoRsp = new GetOpActivityInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpActivityDataNotify", [
            { no: 15, name: "op_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.OpActivityInfo }
        ]);
    }
    create(value) {
        const message = { opActivityInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.OpActivityInfo op_activity_info_list */ 15:
                    message.opActivityInfoList.push(exports.OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.OpActivityInfo op_activity_info_list = 15; */
        for (let i = 0; i < message.opActivityInfoList.length; i++)
            exports.OpActivityInfo.internalBinaryWrite(message.opActivityInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityDataNotify
 */
exports.OpActivityDataNotify = new OpActivityDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpActivityUpdateNotify", [
            { no: 6, name: "op_activity_info", kind: "message", T: () => exports.OpActivityInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.OpActivityInfo op_activity_info */ 6:
                    message.opActivityInfo = exports.OpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.opActivityInfo);
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
        /* optional com.midnights.game.OpActivityInfo op_activity_info = 6; */
        if (message.opActivityInfo)
            exports.OpActivityInfo.internalBinaryWrite(message.opActivityInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityUpdateNotify
 */
exports.OpActivityUpdateNotify = new OpActivityUpdateNotify$Type();
