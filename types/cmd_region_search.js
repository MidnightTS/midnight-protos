"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegionSearchReq = exports.TakeRegionSearchRewardRsp = exports.TakeRegionSearchRewardReq = exports.RegionSearchChangeRegionNotify = exports.RegionSearchNotify = exports.RegionSearchInfo = exports.RegionSearch = exports.GetRegionSearchReq_CmdId = exports.TakeRegionSearchRewardRsp_CmdId = exports.TakeRegionSearchRewardReq_CmdId = exports.RegionSearchChangeRegionNotify_CmdId = exports.RegionSearchChangeRegionNotify_RegionEvent = exports.RegionSearchNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.RegionSearchNotify.CmdId
 */
var RegionSearchNotify_CmdId;
(function (RegionSearchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionSearchNotify_CmdId[RegionSearchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5626;
     */
    RegionSearchNotify_CmdId[RegionSearchNotify_CmdId["CMD_ID"] = 5626] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionSearchNotify_CmdId[RegionSearchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RegionSearchNotify_CmdId[RegionSearchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RegionSearchNotify_CmdId = exports.RegionSearchNotify_CmdId || (exports.RegionSearchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RegionSearchChangeRegionNotify.RegionEvent
 */
var RegionSearchChangeRegionNotify_RegionEvent;
(function (RegionSearchChangeRegionNotify_RegionEvent) {
    /**
     * @generated from protobuf enum value: REGION_EVENT_NONE = 0;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: REGION_EVENT_ENTER = 1;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["ENTER"] = 1] = "ENTER";
    /**
     * @generated from protobuf enum value: REGION_EVENT_LEAVE = 2;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["LEAVE"] = 2] = "LEAVE";
})(RegionSearchChangeRegionNotify_RegionEvent = exports.RegionSearchChangeRegionNotify_RegionEvent || (exports.RegionSearchChangeRegionNotify_RegionEvent = {}));
/**
 * @generated from protobuf enum com.midnights.game.RegionSearchChangeRegionNotify.CmdId
 */
var RegionSearchChangeRegionNotify_CmdId;
(function (RegionSearchChangeRegionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionSearchChangeRegionNotify_CmdId[RegionSearchChangeRegionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5618;
     */
    RegionSearchChangeRegionNotify_CmdId[RegionSearchChangeRegionNotify_CmdId["CMD_ID"] = 5618] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionSearchChangeRegionNotify_CmdId[RegionSearchChangeRegionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RegionSearchChangeRegionNotify_CmdId[RegionSearchChangeRegionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RegionSearchChangeRegionNotify_CmdId[RegionSearchChangeRegionNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RegionSearchChangeRegionNotify_CmdId = exports.RegionSearchChangeRegionNotify_CmdId || (exports.RegionSearchChangeRegionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeRegionSearchRewardReq.CmdId
 */
var TakeRegionSearchRewardReq_CmdId;
(function (TakeRegionSearchRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeRegionSearchRewardReq_CmdId[TakeRegionSearchRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5625;
     */
    TakeRegionSearchRewardReq_CmdId[TakeRegionSearchRewardReq_CmdId["CMD_ID"] = 5625] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeRegionSearchRewardReq_CmdId[TakeRegionSearchRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeRegionSearchRewardReq_CmdId[TakeRegionSearchRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeRegionSearchRewardReq_CmdId[TakeRegionSearchRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeRegionSearchRewardReq_CmdId = exports.TakeRegionSearchRewardReq_CmdId || (exports.TakeRegionSearchRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeRegionSearchRewardRsp.CmdId
 */
var TakeRegionSearchRewardRsp_CmdId;
(function (TakeRegionSearchRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeRegionSearchRewardRsp_CmdId[TakeRegionSearchRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5607;
     */
    TakeRegionSearchRewardRsp_CmdId[TakeRegionSearchRewardRsp_CmdId["CMD_ID"] = 5607] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeRegionSearchRewardRsp_CmdId[TakeRegionSearchRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeRegionSearchRewardRsp_CmdId[TakeRegionSearchRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeRegionSearchRewardRsp_CmdId = exports.TakeRegionSearchRewardRsp_CmdId || (exports.TakeRegionSearchRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetRegionSearchReq.CmdId
 */
var GetRegionSearchReq_CmdId;
(function (GetRegionSearchReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRegionSearchReq_CmdId[GetRegionSearchReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5602;
     */
    GetRegionSearchReq_CmdId[GetRegionSearchReq_CmdId["CMD_ID"] = 5602] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRegionSearchReq_CmdId[GetRegionSearchReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRegionSearchReq_CmdId[GetRegionSearchReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRegionSearchReq_CmdId[GetRegionSearchReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetRegionSearchReq_CmdId = exports.GetRegionSearchReq_CmdId || (exports.GetRegionSearchReq_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearch$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionSearch", [
            { no: 13, name: "is_entered", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.RegionSearchState", define_1.RegionSearchState] },
            { no: 8, name: "region_search_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_entered */ 13:
                    message.isEntered = reader.bool();
                    break;
                case /* optional uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* optional com.midnights.game.RegionSearchState state */ 2:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 region_search_id */ 8:
                    message.regionSearchId = reader.uint32();
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
        /* optional bool is_entered = 13; */
        if (message.isEntered !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isEntered);
        /* optional uint32 progress = 5; */
        if (message.progress !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional com.midnights.game.RegionSearchState state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* optional uint32 region_search_id = 8; */
        if (message.regionSearchId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.regionSearchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionSearch
 */
exports.RegionSearch = new RegionSearch$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionSearchInfo", [
            { no: 5, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "region_search_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RegionSearch },
            { no: 7, name: "is_entered", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { regionSearchList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 5:
                    message.id = reader.uint32();
                    break;
                case /* repeated com.midnights.game.RegionSearch region_search_list */ 1:
                    message.regionSearchList.push(exports.RegionSearch.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_entered */ 7:
                    message.isEntered = reader.bool();
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
        /* optional uint32 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.id);
        /* repeated com.midnights.game.RegionSearch region_search_list = 1; */
        for (let i = 0; i < message.regionSearchList.length; i++)
            exports.RegionSearch.internalBinaryWrite(message.regionSearchList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_entered = 7; */
        if (message.isEntered !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isEntered);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionSearchInfo
 */
exports.RegionSearchInfo = new RegionSearchInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionSearchNotify", [
            { no: 1, name: "region_search_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RegionSearchInfo },
            { no: 8, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { regionSearchList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.RegionSearchInfo region_search_list */ 1:
                    message.regionSearchList.push(exports.RegionSearchInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 uid */ 8:
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
        /* repeated com.midnights.game.RegionSearchInfo region_search_list = 1; */
        for (let i = 0; i < message.regionSearchList.length; i++)
            exports.RegionSearchInfo.internalBinaryWrite(message.regionSearchList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 uid = 8; */
        if (message.uid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionSearchNotify
 */
exports.RegionSearchNotify = new RegionSearchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearchChangeRegionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionSearchChangeRegionNotify", [
            { no: 1, name: "event", kind: "enum", opt: true, T: () => ["com.midnights.game.RegionSearchChangeRegionNotify.RegionEvent", RegionSearchChangeRegionNotify_RegionEvent, "REGION_EVENT_"] },
            { no: 10, name: "region_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.RegionSearchChangeRegionNotify.RegionEvent event */ 1:
                    message.event = reader.int32();
                    break;
                case /* optional uint32 region_id */ 10:
                    message.regionId = reader.uint32();
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
        /* optional com.midnights.game.RegionSearchChangeRegionNotify.RegionEvent event = 1; */
        if (message.event !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.event);
        /* optional uint32 region_id = 10; */
        if (message.regionId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.regionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionSearchChangeRegionNotify
 */
exports.RegionSearchChangeRegionNotify = new RegionSearchChangeRegionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeRegionSearchRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeRegionSearchRewardReq", [
            { no: 3, name: "search_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 search_id */ 3:
                    message.searchId = reader.uint32();
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
        /* optional uint32 search_id = 3; */
        if (message.searchId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.searchId);
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
 * @generated MessageType for protobuf message com.midnights.game.TakeRegionSearchRewardReq
 */
exports.TakeRegionSearchRewardReq = new TakeRegionSearchRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeRegionSearchRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeRegionSearchRewardRsp", [
            { no: 14, name: "search_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 search_id */ 14:
                    message.searchId = reader.uint32();
                    break;
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
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
        /* optional uint32 search_id = 14; */
        if (message.searchId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.searchId);
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
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
 * @generated MessageType for protobuf message com.midnights.game.TakeRegionSearchRewardRsp
 */
exports.TakeRegionSearchRewardRsp = new TakeRegionSearchRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRegionSearchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetRegionSearchReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetRegionSearchReq
 */
exports.GetRegionSearchReq = new GetRegionSearchReq$Type();
