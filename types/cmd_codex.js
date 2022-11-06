"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCodexPushtipsReadRsp = exports.SetCodexPushtipsReadReq = exports.ViewCodexRsp = exports.ViewCodexReq = exports.QueryCodexMonsterBeKilledNumRsp = exports.QueryCodexMonsterBeKilledNumReq = exports.CodexDataUpdateNotify = exports.CodexDataFullNotify = exports.CodexTypeData = exports.SetCodexPushtipsReadRsp_CmdId = exports.SetCodexPushtipsReadReq_CmdId = exports.ViewCodexRsp_CmdId = exports.ViewCodexReq_CmdId = exports.QueryCodexMonsterBeKilledNumRsp_CmdId = exports.QueryCodexMonsterBeKilledNumReq_CmdId = exports.CodexDataUpdateNotify_CmdId = exports.CodexDataFullNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.CodexDataFullNotify.CmdId
 */
var CodexDataFullNotify_CmdId;
(function (CodexDataFullNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CodexDataFullNotify_CmdId[CodexDataFullNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4205;
     */
    CodexDataFullNotify_CmdId[CodexDataFullNotify_CmdId["CMD_ID"] = 4205] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CodexDataFullNotify_CmdId[CodexDataFullNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CodexDataFullNotify_CmdId[CodexDataFullNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CodexDataFullNotify_CmdId = exports.CodexDataFullNotify_CmdId || (exports.CodexDataFullNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CodexDataUpdateNotify.CmdId
 */
var CodexDataUpdateNotify_CmdId;
(function (CodexDataUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CodexDataUpdateNotify_CmdId[CodexDataUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4207;
     */
    CodexDataUpdateNotify_CmdId[CodexDataUpdateNotify_CmdId["CMD_ID"] = 4207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CodexDataUpdateNotify_CmdId[CodexDataUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CodexDataUpdateNotify_CmdId[CodexDataUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CodexDataUpdateNotify_CmdId = exports.CodexDataUpdateNotify_CmdId || (exports.CodexDataUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QueryCodexMonsterBeKilledNumReq.CmdId
 */
var QueryCodexMonsterBeKilledNumReq_CmdId;
(function (QueryCodexMonsterBeKilledNumReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryCodexMonsterBeKilledNumReq_CmdId[QueryCodexMonsterBeKilledNumReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4203;
     */
    QueryCodexMonsterBeKilledNumReq_CmdId[QueryCodexMonsterBeKilledNumReq_CmdId["CMD_ID"] = 4203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryCodexMonsterBeKilledNumReq_CmdId[QueryCodexMonsterBeKilledNumReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryCodexMonsterBeKilledNumReq_CmdId[QueryCodexMonsterBeKilledNumReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryCodexMonsterBeKilledNumReq_CmdId[QueryCodexMonsterBeKilledNumReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QueryCodexMonsterBeKilledNumReq_CmdId = exports.QueryCodexMonsterBeKilledNumReq_CmdId || (exports.QueryCodexMonsterBeKilledNumReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QueryCodexMonsterBeKilledNumRsp.CmdId
 */
var QueryCodexMonsterBeKilledNumRsp_CmdId;
(function (QueryCodexMonsterBeKilledNumRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryCodexMonsterBeKilledNumRsp_CmdId[QueryCodexMonsterBeKilledNumRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4209;
     */
    QueryCodexMonsterBeKilledNumRsp_CmdId[QueryCodexMonsterBeKilledNumRsp_CmdId["CMD_ID"] = 4209] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QueryCodexMonsterBeKilledNumRsp_CmdId[QueryCodexMonsterBeKilledNumRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QueryCodexMonsterBeKilledNumRsp_CmdId[QueryCodexMonsterBeKilledNumRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QueryCodexMonsterBeKilledNumRsp_CmdId = exports.QueryCodexMonsterBeKilledNumRsp_CmdId || (exports.QueryCodexMonsterBeKilledNumRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ViewCodexReq.CmdId
 */
var ViewCodexReq_CmdId;
(function (ViewCodexReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ViewCodexReq_CmdId[ViewCodexReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4202;
     */
    ViewCodexReq_CmdId[ViewCodexReq_CmdId["CMD_ID"] = 4202] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ViewCodexReq_CmdId[ViewCodexReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ViewCodexReq_CmdId[ViewCodexReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ViewCodexReq_CmdId[ViewCodexReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ViewCodexReq_CmdId = exports.ViewCodexReq_CmdId || (exports.ViewCodexReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ViewCodexRsp.CmdId
 */
var ViewCodexRsp_CmdId;
(function (ViewCodexRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ViewCodexRsp_CmdId[ViewCodexRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4201;
     */
    ViewCodexRsp_CmdId[ViewCodexRsp_CmdId["CMD_ID"] = 4201] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ViewCodexRsp_CmdId[ViewCodexRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ViewCodexRsp_CmdId[ViewCodexRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ViewCodexRsp_CmdId = exports.ViewCodexRsp_CmdId || (exports.ViewCodexRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetCodexPushtipsReadReq.CmdId
 */
var SetCodexPushtipsReadReq_CmdId;
(function (SetCodexPushtipsReadReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCodexPushtipsReadReq_CmdId[SetCodexPushtipsReadReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4208;
     */
    SetCodexPushtipsReadReq_CmdId[SetCodexPushtipsReadReq_CmdId["CMD_ID"] = 4208] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCodexPushtipsReadReq_CmdId[SetCodexPushtipsReadReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCodexPushtipsReadReq_CmdId[SetCodexPushtipsReadReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCodexPushtipsReadReq_CmdId[SetCodexPushtipsReadReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetCodexPushtipsReadReq_CmdId = exports.SetCodexPushtipsReadReq_CmdId || (exports.SetCodexPushtipsReadReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetCodexPushtipsReadRsp.CmdId
 */
var SetCodexPushtipsReadRsp_CmdId;
(function (SetCodexPushtipsReadRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCodexPushtipsReadRsp_CmdId[SetCodexPushtipsReadRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4206;
     */
    SetCodexPushtipsReadRsp_CmdId[SetCodexPushtipsReadRsp_CmdId["CMD_ID"] = 4206] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCodexPushtipsReadRsp_CmdId[SetCodexPushtipsReadRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCodexPushtipsReadRsp_CmdId[SetCodexPushtipsReadRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetCodexPushtipsReadRsp_CmdId = exports.SetCodexPushtipsReadRsp_CmdId || (exports.SetCodexPushtipsReadRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CodexTypeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CodexTypeData", [
            { no: 14, name: "codex_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weapon_max_promote_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 13, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.CodexType", define_1.CodexType] },
            { no: 5, name: "have_viewed_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { codexIdList: [], weaponMaxPromoteLevelMap: {}, haveViewedList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 codex_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> weapon_max_promote_level_map */ 4:
                    this.binaryReadMap4(message.weaponMaxPromoteLevelMap, reader, options);
                    break;
                case /* optional com.midnights.game.CodexType type */ 13:
                    message.type = reader.int32();
                    break;
                case /* repeated bool have_viewed_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.haveViewedList.push(reader.bool());
                    else
                        message.haveViewedList.push(reader.bool());
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.CodexTypeData.weapon_max_promote_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 codex_id_list = 14; */
        for (let i = 0; i < message.codexIdList.length; i++)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.codexIdList[i]);
        /* map<uint32, uint32> weapon_max_promote_level_map = 4; */
        for (let k of Object.keys(message.weaponMaxPromoteLevelMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.weaponMaxPromoteLevelMap[k]).join();
        /* optional com.midnights.game.CodexType type = 13; */
        if (message.type !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.type);
        /* repeated bool have_viewed_list = 5; */
        for (let i = 0; i < message.haveViewedList.length; i++)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.haveViewedList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CodexTypeData
 */
exports.CodexTypeData = new CodexTypeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CodexDataFullNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CodexDataFullNotify", [
            { no: 4, name: "last_read_pushtips_codex_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "recent_viewed_pushtips_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "last_read_pushtips_type_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "type_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CodexTypeData }
        ]);
    }
    create(value) {
        const message = { recentViewedPushtipsList: [], typeDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 last_read_pushtips_codex_id */ 4:
                    message.lastReadPushtipsCodexId = reader.uint32();
                    break;
                case /* repeated uint32 recent_viewed_pushtips_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.recentViewedPushtipsList.push(reader.uint32());
                    else
                        message.recentViewedPushtipsList.push(reader.uint32());
                    break;
                case /* optional uint32 last_read_pushtips_type_id */ 3:
                    message.lastReadPushtipsTypeId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CodexTypeData type_data_list */ 6:
                    message.typeDataList.push(exports.CodexTypeData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 last_read_pushtips_codex_id = 4; */
        if (message.lastReadPushtipsCodexId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lastReadPushtipsCodexId);
        /* repeated uint32 recent_viewed_pushtips_list = 2; */
        for (let i = 0; i < message.recentViewedPushtipsList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.recentViewedPushtipsList[i]);
        /* optional uint32 last_read_pushtips_type_id = 3; */
        if (message.lastReadPushtipsTypeId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.lastReadPushtipsTypeId);
        /* repeated com.midnights.game.CodexTypeData type_data_list = 6; */
        for (let i = 0; i < message.typeDataList.length; i++)
            exports.CodexTypeData.internalBinaryWrite(message.typeDataList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CodexDataFullNotify
 */
exports.CodexDataFullNotify = new CodexDataFullNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CodexDataUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CodexDataUpdateNotify", [
            { no: 8, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "weapon_max_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.CodexType", define_1.CodexType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 8:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 weapon_max_promote_level */ 15:
                    message.weaponMaxPromoteLevel = reader.uint32();
                    break;
                case /* optional com.midnights.game.CodexType type */ 11:
                    message.type = reader.int32();
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
        /* optional uint32 id = 8; */
        if (message.id !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.id);
        /* optional uint32 weapon_max_promote_level = 15; */
        if (message.weaponMaxPromoteLevel !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.weaponMaxPromoteLevel);
        /* optional com.midnights.game.CodexType type = 11; */
        if (message.type !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CodexDataUpdateNotify
 */
exports.CodexDataUpdateNotify = new CodexDataUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryCodexMonsterBeKilledNumReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryCodexMonsterBeKilledNumReq", [
            { no: 14, name: "codex_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { codexIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 codex_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
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
        /* repeated uint32 codex_id_list = 14; */
        for (let i = 0; i < message.codexIdList.length; i++)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.codexIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryCodexMonsterBeKilledNumReq
 */
exports.QueryCodexMonsterBeKilledNumReq = new QueryCodexMonsterBeKilledNumReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryCodexMonsterBeKilledNumRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QueryCodexMonsterBeKilledNumRsp", [
            { no: 4, name: "codex_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "be_captured_num_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "be_killed_num_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { codexIdList: [], beCapturedNumList: [], beKilledNumList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 codex_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 be_captured_num_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.beCapturedNumList.push(reader.uint32());
                    else
                        message.beCapturedNumList.push(reader.uint32());
                    break;
                case /* repeated uint32 be_killed_num_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.beKilledNumList.push(reader.uint32());
                    else
                        message.beKilledNumList.push(reader.uint32());
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 codex_id_list = 4; */
        for (let i = 0; i < message.codexIdList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.codexIdList[i]);
        /* repeated uint32 be_captured_num_list = 6; */
        for (let i = 0; i < message.beCapturedNumList.length; i++)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.beCapturedNumList[i]);
        /* repeated uint32 be_killed_num_list = 12; */
        for (let i = 0; i < message.beKilledNumList.length; i++)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.beKilledNumList[i]);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QueryCodexMonsterBeKilledNumRsp
 */
exports.QueryCodexMonsterBeKilledNumRsp = new QueryCodexMonsterBeKilledNumRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ViewCodexReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ViewCodexReq", [
            { no: 10, name: "type_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CodexTypeData }
        ]);
    }
    create(value) {
        const message = { typeDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CodexTypeData type_data_list */ 10:
                    message.typeDataList.push(exports.CodexTypeData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CodexTypeData type_data_list = 10; */
        for (let i = 0; i < message.typeDataList.length; i++)
            exports.CodexTypeData.internalBinaryWrite(message.typeDataList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ViewCodexReq
 */
exports.ViewCodexReq = new ViewCodexReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ViewCodexRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ViewCodexRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "push_tips_reward_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "recent_viewed_pushtips_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "type_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CodexTypeData },
            { no: 15, name: "push_tips_read_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pushTipsRewardList: [], recentViewedPushtipsList: [], typeDataList: [], pushTipsReadList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 push_tips_reward_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pushTipsRewardList.push(reader.uint32());
                    else
                        message.pushTipsRewardList.push(reader.uint32());
                    break;
                case /* repeated uint32 recent_viewed_pushtips_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.recentViewedPushtipsList.push(reader.uint32());
                    else
                        message.recentViewedPushtipsList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.CodexTypeData type_data_list */ 9:
                    message.typeDataList.push(exports.CodexTypeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 push_tips_read_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pushTipsReadList.push(reader.uint32());
                    else
                        message.pushTipsReadList.push(reader.uint32());
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
        /* repeated uint32 push_tips_reward_list = 10; */
        for (let i = 0; i < message.pushTipsRewardList.length; i++)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.pushTipsRewardList[i]);
        /* repeated uint32 recent_viewed_pushtips_list = 3; */
        for (let i = 0; i < message.recentViewedPushtipsList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.recentViewedPushtipsList[i]);
        /* repeated com.midnights.game.CodexTypeData type_data_list = 9; */
        for (let i = 0; i < message.typeDataList.length; i++)
            exports.CodexTypeData.internalBinaryWrite(message.typeDataList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 push_tips_read_list = 15; */
        for (let i = 0; i < message.pushTipsReadList.length; i++)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.pushTipsReadList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ViewCodexRsp
 */
exports.ViewCodexRsp = new ViewCodexRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetCodexPushtipsReadReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetCodexPushtipsReadReq", [
            { no: 2, name: "type_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "codex_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type_id */ 2:
                    message.typeId = reader.uint32();
                    break;
                case /* optional uint32 codex_id */ 14:
                    message.codexId = reader.uint32();
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
        /* optional uint32 type_id = 2; */
        if (message.typeId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.typeId);
        /* optional uint32 codex_id = 14; */
        if (message.codexId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.codexId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetCodexPushtipsReadReq
 */
exports.SetCodexPushtipsReadReq = new SetCodexPushtipsReadReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetCodexPushtipsReadRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetCodexPushtipsReadRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "type_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "codex_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 type_id */ 5:
                    message.typeId = reader.uint32();
                    break;
                case /* optional uint32 codex_id */ 14:
                    message.codexId = reader.uint32();
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
        /* optional uint32 type_id = 5; */
        if (message.typeId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.typeId);
        /* optional uint32 codex_id = 14; */
        if (message.codexId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.codexId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetCodexPushtipsReadRsp
 */
exports.SetCodexPushtipsReadRsp = new SetCodexPushtipsReadRsp$Type();
